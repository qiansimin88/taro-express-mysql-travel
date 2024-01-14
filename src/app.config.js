export default {
  pages: ["pages/index/index", "pages/order/order"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#7F8389",
    selectedColor: "#5495e6",
    borderStyle: "black",
    list: [
      {
        text: "首页",
        pagePath: "pages/index/index",
        iconPath: "assets/images/index-unselected.png",
        selectedIconPath: "assets/images/index-selected.png",
      },
      {
        text: "我的订单",
        pagePath: "pages/order/order",
        iconPath: "assets/images/order-unselected.png",
        selectedIconPath: "assets/images/order-selected.png",
      },
    ],
  },
};
