import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEffect } from 'react'
// import {request} from '../../common/utils'

const FlightList = () => {
  useEffect(() => {
    // 路由参数
    const {
      params
    } = Taro.getCurrentInstance().router

    Taro.setNavigationBarTitle({
      title: `${ decodeURIComponent(params?.dptCityName)} - ${decodeURIComponent(params?.arrCityName)}`
    })

  }, [])
  return (
    <View className='index'>
      <Text>航班列表</Text>
    </View>
  )
}


export default FlightList
