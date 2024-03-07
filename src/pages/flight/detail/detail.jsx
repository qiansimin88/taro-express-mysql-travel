


import { View,Text, Image, Button } from "@tarojs/components";
import Taro, { getCurrentInstance, useShareAppMessage } from '@tarojs/taro'
import dayjs from 'dayjs'
import { useState } from "react";

import "./index.scss";


// 航班详情页
const FlightDetail = (props) => {
  // eslint-disable-next-line
  const [nowSelectedFlight, setNowSelectedFlight] = useState(getCurrentInstance()?.router?.params)

  const {
    airCompanyName,
    airIcon,
    arrAirportName,
    arrTimeStr,
    dptAirportName,
    dptTime,
    dptTimeStr,
    price,
  } = nowSelectedFlight

  // 分享
  useShareAppMessage(()=> {
    return {
      title: '美好的行程，一起来玩吧',
      path: `/${props?.tid}`,
      imageUrl: 'http://www.picsum.photos/400/300',
    }
  })

  return (
    <View className='detail-container'>
      <View className='flight-segment'>
        <View className='info-head'>
          <View className='tag'>直飞</View>
          <View className='company-info'>
            <Image src={airIcon} className='logo'></Image>
            {`${airCompanyName} ${dayjs(dptTime).format("M月D日")}`}
          </View>
        </View>
        <View className='info-detail'>
          <View className='from'>
            <View className='time'>{dptTimeStr}</View>
            <View className='station'>{dptAirportName}</View>
          </View>
          <Image
            className='mid'
            src='https://i.postimg.cc/z3P1QNf1/1.png'
          ></Image>
          <View className='to'>
            <View className='time'>{arrTimeStr}</View>
            <View className='station'>{arrAirportName}</View>
          </View>
        </View>
      </View>
      <View className='passenger-box module-box'>
        <Text className='title'>乘机人</Text>
        {/* {
          isLogin ? <View className='name'>{nickName}</View> : <Button className='add-btn name' onClick={tools.doLogin}>新增</Button>
        } */}
      </View>
      <View className='passenger-box module-box'>
        <Text className='title'>联系手机</Text>
        <View className='phone-box'>
          <Text className='num-pre'>+86 </Text>
          {/* <Input disabled placeholder='请输入乘机人手机号' value={userPhone}></Input> */}
        </View>
      </View>
      {/* 测试Taro bug */}
      {/* <Switch
      onChange={this.onSwitchChange}
    ></Switch>
    <View>
      {
        isChecked ? (
          <View className="module-box">
            <Text className="title">保险</Text>
            <View className="insurance-name">
              <Text>人身意外险</Text>
              <Text>¥ 30/人</Text>
            </View>
          </View>
        ) : null
      }
    </View> */}
      <View className='price-item'>
        <View className='color-red'>
        ¥ <Text className='price color-red'>{price}</Text>
        </View>
        {/* <View className='order-btn' onClick={this.onOrder}>订</View> */}
      </View>
      <Button className='share-btn' openType='share'>快将行程分享给好友吧</Button>
      {/*  机票底部  */}
      <View className='flight-info'></View>
    </View>
  )
};

export default FlightDetail;
