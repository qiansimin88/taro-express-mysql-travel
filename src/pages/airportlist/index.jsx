import { View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import apis from '@/api'
import { ERR_NET_MESSAGE } from '@/common/constant'
import { useEffect, useState } from 'react'
import CityItem from './component/cityitem'
import './index.scss'


const AirportList = () => {
  const [letterCityList, setLetterCityList] = useState([])
  const [cityList, setCityList] = useState([])
  const [scrollIntoId, setScrollIntoId] = useState(null)  //点击字母滚动的 ID

  // 请求城市
  const getAirPostList = () => {
    Taro.showLoading({
      title: '加载中',
      mask: true
    })
    apis.airportCityListReq()
      .then(res => {
        const {
          result
        } = res

        if ( result ) {
          const cityObj =  handlerCityLetter(result)
          setLetterCityList([...cityObj.keys()])
          setCityList(cityObj)
        }
      }).catch(err => {
        console.log(err)
        Taro.showToast(ERR_NET_MESSAGE)
      }).finally(() => {
        Taro.hideLoading()
      })
  }

  // 截取城市字母ABCD 排序规则
  const handlerCityLetter = D => {
    if ( !D.length ) return
    const result = new Map()

    for ( let i = 0; i < D.length; i++ ) {
      const letter = D[i].firstLetter
      if ( !result.has(letter) ) {
        result.set(letter, [])
      }
      result.set(letter, result.get(letter).concat(D[i]))
    }
    return result
  }

  useEffect(() => {
    getAirPostList()
  }, [])

  return (
    <View className='airport-list-container'>
      <ScrollView
        scrollY
        scrollIntoView={scrollIntoId}
        scrollWithAnimation
        style={{ 'height': '100vh' }}
      >
        {
          Array.from(cityList, ([key, value]) => {
            return <CityItem
              key={key}
              label={key}
              cityList={value}
            />
          })
        }
      </ScrollView>
      <View className='letter-container'>
        {
          letterCityList?.map(_ => (
            <View onClick={() => setScrollIntoId(_)} key={_} className='letter-item'>
              <Text>{ _ }</Text>
            </View>
          ))
        }
      </View>
    </View>
  )
}


export default AirportList
