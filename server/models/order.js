// 订单
const express = require("express");

const router = express.Router();
const { sqlQuery } = require("../mysql");

router.post("/createorder", async (req, res) => {
  try {
    const { userPhone, orderInfo } = req.body;
    const { dptCityName, arrCityName, dptTimeStr, dptTime, price } = orderInfo;
    // decimal 一般用于价格的存储
    const createTableSql = `
    create table if not exists orderList (
      id int auto_increment,
      userPhone char(11) not null,
      dptCityName char(50) not null,
      arrCityName char(50) not null,
      dptTimeStr char(50) not null,
      dptTime char(50) not null,
      price decimal not null,
      primary key (id)
    ) engine = innodb;
    `;
    await sqlQuery(createTableSql);
    // 插入对应字段值
    const insetSql = `insert into orderList(id, userPhone, dptCityName, arrCityName, dptTimeStr, dptTime, price) values (null, '${userPhone}', '${dptCityName}', '${arrCityName}', '${dptTimeStr}', '${dptTime}', '${price}')`;
    await sqlQuery(insetSql);
    res.send({
      code: 1,
      message: "预定成功~",
    });
  } catch (err) {
    res.send({
      code: -1,
      mes: "请求失败",
      result: err,
    });
  }
});

module.exports = router;
