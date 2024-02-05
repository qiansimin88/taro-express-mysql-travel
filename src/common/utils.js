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

export const navigateTo = (uri, params = {}) => {
  let itemArray = [];
  if (typeof params === "object" && Object.keys(params).length) {
    for (const o in params) {
      itemArray.push(`${o}=${params[o]}`);
    }
    params = itemArray.join("&");
  }

  if (uri.indexOf("?") > -1) {
    uri = `${uri}&${params}`;
  } else {
    uri = `${uri}?${params}`;
  }

  return Taro.navigateTo({
    url: uri,
  });
};
