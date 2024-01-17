import { request } from "../common/utils";

const API_PRE = "http://127.0.0.1:3000";

export default {
  // banner接口
  adsBannerImg(params) {
    return request({
      url: `${API_PRE}/ads/advertising`,
      method: "GET",
      params,
    });
  },
  airportCityListReq(params) {
    return request({
      url: `${API_PRE}/city/airportList`,
      method: "GET",
      params,
    });
  },
};
