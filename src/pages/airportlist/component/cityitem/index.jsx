import { View, Text } from '@tarojs/components'
import './index.scss'


const CityItem = ({
  label,
  cityList
}) => {
  return (
    <view className='list-item' id={label}>
      <Text className='label'>
        {label}
      </Text>
      {
        cityList.map(o => {
          return (
            <View className='name' key={o.id}>
              {
                `${o.cityName} ( ${o.airportName} )`
              }
            </View>
          )
        })
      }
    </view>
  )
}

export default CityItem
