import { View, SwiperItem, Text } from "@tarojs/components";
import "./index.scss";

import Tab from "../../../components/Tab";
import NoExploit from '../../../components/NoExploit'
import { useState, useEffect } from "react";


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

  const onTaClickHanlder = () => {
    console.log(11)
  }

  const chooseFlightCity = (name) => {
    console.log(name)
  }

  useEffect(() => {
    console.log(isExchange)
  }, [isExchange])

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
  </View>;
};

export default FlightIndex;
