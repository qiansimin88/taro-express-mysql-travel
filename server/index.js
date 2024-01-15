const express = require("express");
const models = require("./models"); // 所有的 Models 方法

const app = express();
const port = 3000;

// 执行所有的 models
models(app);

app.listen(port, () => {
  console.log("listen on success");
});
