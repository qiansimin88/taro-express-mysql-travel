import { request } from "../common/utils";
import { API_PRE } from "../common/constant";

export default {
  //  创建预定订单
  postCreateOrder(params) {
    return request({
      url: `${API_PRE}/order/createOrder`,
      method: "POST",
      params,
    });
  },
};
