import { View, SwiperItem, Swiper, Text, Image } from "@tarojs/components";
import "./index.scss";

import Tab from "../../../components/Tab";
import NoExploit from '../../../components/NoExploit'
import { useState, useEffect } from "react";
import apis from '../../../api'


const FLIGHT_TABS = [
  {
    label: '单程',
    id: 0
  },
  {
    label: '多程',
    id: 1
  },
  {
    label: '往返',
    id: 2
  }
]

const FlightIndex = ({
  flightIndex: {
    dptCityName,
    arrCityName
  }
}) => {

  const [isExchange, setIsExchange] = useState(false)
  const [adList, setAdList] = useState([])

  const onTaClickHanlder = () => {
    console.log(11)
  }

  const chooseFlightCity = (name) => {
    console.log(name)
  }

  useEffect(() => {
    apis.adsBannerImg()
      .then(res => {
        const {
          data: { result }
        } = res
        if (result) {
          setAdList(result)
        }
      })
  }, [])

  // useEffect(() => {
  //   console.log(isExchange)
  // }, [isExchange])

  return <View className='flight-container'>
    <View className='flight-top'>
      <Tab tabList={FLIGHT_TABS} initTab={0} onTaClick={onTaClickHanlder} className='flight-index-tab'>
        {/*  单程  */}
        <SwiperItem>
          <View className='item station'>
            <View
              className={`cell from ${isExchange ? "exchange" : ""}`}
              onClick={() => chooseFlightCity("depart")}
            >
              {dptCityName}
            </View>
            <Text
              onClick={() => {
                console.log(3333)
                setIsExchange((v) => !v)
              }}
              className={`icon-zhihuan iconfont ${
                isExchange ? "active" : ""
              }`}
            >
            </Text>
            <View
              className={`cell to ${isExchange ? "exchange" : ""}`}
              onClick={() => chooseFlightCity("arrive")}
            >
              {arrCityName}
            </View>
          </View>
        </SwiperItem>
        {/*  往返  */}
        <SwiperItem>
          <NoExploit className='no-data' />
        </SwiperItem>
        {/*  多程  */}
        <SwiperItem>
          <NoExploit className='no-data' />
        </SwiperItem>
      </Tab>
    </View>
    <View className='alipay-swiper' style={{margin: '15px'}}>
      <Swiper className='advs-banner-bd' autoplay circular interval={3000}>
        {
          adList?.map(item => {
            return (
              <SwiperItem key={item?.id} className='item'>
                <Image className='img' src={item?.url}></Image>
              </SwiperItem>
            )
          })
        }
      </Swiper>
    </View>
  </View>;
};

export default FlightIndex;
