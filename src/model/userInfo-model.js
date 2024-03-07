// 登录用户信息的 持久化信息
import { useState } from "react";
import { createGlobalStore } from "hox";
import { getStorageSync } from "@tarojs/taro";

export const [useUserInfoModel] = createGlobalStore(() => {
  // 拿到本地的存储信息 判断是否登录
  const localStorageInfo = getStorageSync("userInfo");

  const [userInfoState, setUserInfoState] = useState({
    isLogin: !!localStorageInfo?.userPhone,
    userPhone: localStorageInfo?.userPhone,
    nickName: localStorageInfo?.nickName,
  });

  const changeUserInfoState = (data) => {
    setUserInfoState({ ...userInfoState, ...data });
  };

  return {
    userInfoState,
    changeUserInfoState,
  };
});
