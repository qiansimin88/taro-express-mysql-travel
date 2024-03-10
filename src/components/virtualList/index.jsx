// eslint-disable-next-line
import { Component, memo, useState, useMemo } from "react";
import Taro from "@tarojs/taro";
import { View, ScrollView, Block } from "@tarojs/components";

/**
/**
 * 虚拟列表  转换成指定个数的二维数组 能分段显示 相应的数据
 * @param	{Array}	list  列表数据
 * @param	{Number}	segmentNum  自定义分段的数量，默认10
 * @param	{Object}	scrollViewProps  scrollView的参数
 * @param	{Function}	onComplete  二维列表是否已经把全部数据加载完成的回调
 * @param	{Function}	onRender  二维列表Item的渲染回调
 * @param	{Function}	onRenderBottom  二维列表下部分内容渲染回调
 * @param	{Number}	screenNum  指定页面显示区域基准值，默认2
 * @param className 样式 class
 */

// 把一维数组转换成二维数组
const handlerList = (list, segmentNum) => {
  let result = [];
  for (let i = 0; i < list.length; i += segmentNum) {
    result.push(list.slice(i, i + segmentNum));
  }
  return result
};

const VirtualList = ({ list, _scrollViewProps, className, onRender, segmentNum = 10 }) => {

  const listData = useMemo(() => {
    return handlerList(list, segmentNum)
  }, [list, segmentNum] )

  // 虚拟列表当前渲染的数据
  // eslint-disable-next-line
  const [nowRenderList, setNowRenderList] = useState(listData.slice(0, 1))

  return (
    <ScrollView
      scrollY
      style={{
        height: '100%',
      }}
      className={`zt-virtual-list-container ${className}`}
      {
        ..._scrollViewProps
      }
    >
      <View className='zt-main-list'>
        {
          nowRenderList?.map((item, pageIndex) => {
            return (
              <View key={pageIndex} className={`wrap_${pageIndex}`}>
                {
                  item?.length > 0 ? (
                    <Block>
                      {
                        item.map((el, index) => {
                          return onRender?.(el, (pageIndex * segmentNum + index), pageIndex)
                        })
                      }
                    </Block>
                  ) : (
                    <View style={{'height': `${item?.height}px`}}></View>
                  )
                }

              </View>
            )
          })
        }
      </View>
    </ScrollView>
  )
};

export default memo(VirtualList);
