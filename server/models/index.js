// 收集所有接口
module.exports = (app) => {
  // 路由注入
  app.use("/ads", require("./ads"));
  app.use("/city", require("./airportList"));
};
