// 收集所有接口
module.exports = (app) => {
  // 路由注入
  app.use("/ads", require("./ads"));
  app.use("/city", require("./airportList"));
  app.use("/airList", require("./airList"));
  // 这个不需要前缀  冗余的
  app.use(require("./login"));
  app.use("/order", require("./order"));
};
