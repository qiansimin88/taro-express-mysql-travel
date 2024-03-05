import Taro from "@tarojs/taro";
import dayjs from "dayjs";

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

export const navigateTo = (uri, params) => {
  let itemArray = [];
  if (typeof params === "object" && Object.keys(params).length) {
    for (const o in params) {
      itemArray.push(`${o}=${params[o]}`);
    }
    params = itemArray.join("&");
  }

  if (!!params) {
    if (uri.indexOf("?") > -1) {
      uri = `${uri}&${params}`;
    } else {
      uri = `${uri}?${params}`;
    }
  }

  return Taro.navigateTo({
    url: uri,
  });
};

export const weekDay = (date = "") => {
  const day = dayjs(date).day();
  switch (day) {
    case 1:
      return "周一";
    case 2:
      return "周二";
    case 3:
      return "周三";
    case 4:
      return "周四";
    case 5:
      return "周五";
    case 6:
      return "周六";
    case 0:
      return "周日";
    default:
      return "";
  }
};
