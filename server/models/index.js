// 收集所有接口
module.exports = (app) => {
  // 路由
  app.use("/ads", require("./ads"));
};
