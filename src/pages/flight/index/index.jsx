import { View, SwiperItem } from "@tarojs/components";
import "./index.scss";

import Tab from "../../../components/Tab";

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

const FlightIndex = () => {

  const onTaClickHanlder = () => {
    // console.log(id)
  }

  return <View className='flight-container'>
    <View className='flight-top'>
      <Tab tabList={FLIGHT_TABS} initTab={0} onTaClick={onTaClickHanlder} className='flight-index-tab'>
        <SwiperItem>1</SwiperItem>
        <SwiperItem>2</SwiperItem>
        <SwiperItem>3</SwiperItem>
      </Tab>
    </View>
  </View>;
};

export default FlightIndex;
