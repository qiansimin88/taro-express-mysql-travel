import Taro from "@tarojs/taro";

// 请求方法
export const request = ({
  url = "",
  params = {},
  method = "GET",
  ...other
}) => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url,
      method,
      data: params,
      ...other,
    })
      .then((res) => {
        resolve(res?.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
