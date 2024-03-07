const express = require("express");
const models = require("./models"); // 所有的 Models 方法

const app = express();
const port = 3000;

// 当请求体content-type 时application/json时 解析传过来的值
app.use(express.json());
// 当请求体content-type 时application/x-www-form-urlencoded时
app.use(
  express.urlencoded({
    extended: false,
  })
);

// 执行所有的 models
models(app);

app.listen(port, () => {
  console.log("listen on success");
});
