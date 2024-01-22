// 飞机航班相关的 model
import { useState } from "react";
import { createGlobalStore } from "hox";

export const [useAirportModel] = createGlobalStore(() => {
  const [airportInfoState, setAirportInfoState] = useState({
    dptCityId: 2,
    dptCityName: "上海",
    dptAirportName: "虹桥机场",
    arrCityId: 1,
    arrCityName: "北京",
    arrAirportName: "大兴机场",
    cityType: "depart", // 当前城市类型 depart: 出发， arrive：到达
  });

  const changeAirportInfo = (data) => {
    setAirportInfoState({ ...airportInfoState, ...data });
  };

  return {
    airportInfoState,
    changeAirportInfo,
  };
});
