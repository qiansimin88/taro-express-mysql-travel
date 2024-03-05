// 不同日期的航班信息
const express = require("express");

const router = express.Router();
const { sqlQuery } = require("../mysql");
const dayjs = require("dayjs");

// const request = require("request");

//
// 创建机场城市列表mysql表flight_list
// request(
//   "https://www.brown77.cn/list/singleList", // 爬虫航班爬虫地址
//   { json: true },
//   async (err, res, body) => {
//     const strSql1 = `
//     create table flight_list(
//       id int not null auto_increment,
//       airCompanyName char(50) not null,
//       airIcon varchar(255) not null,
//       arrTime varchar(255) not null,
//       arrTimeStr char(50) not null,
//       dptTimeStr char(50) not null,
//       primary key (id)
//     ) engine=innodb;
//   `;
//     // 删除表
//     await sqlQuery(`drop table if exists flight_list`);
//     await sqlQuery(strSql1);
//     for (let i = 0; i < body.result.length; i++) {
//       const { id, airCompanyName, airIcon, arrTime, arrTimeStr, dptTimeStr } =
//         body.result[i];
//       // console.log(body.result[i]);
//       const strSql2 = `insert into flight_list(
//                         id, airCompanyName, airIcon, arrTime, arrTimeStr, dptTimeStr
//                         )
//                         values
//                        (
//                         ${id}, '${airCompanyName}', '${airIcon}', '${arrTime}', '${arrTimeStr}', '${dptTimeStr}'
//                        );`;
//       await sqlQuery(strSql2);
//     }

//     if (err) {
//       console.log(err);
//     }
//   }
// );

router.get("/singleList", async (req, res) => {
  // req.query 请求参数
  const { dptAirportName, dptCityName, arrCityName, arrAirportName, dptDate } =
    req.query;
  const strSql = `select * from flight_list`;
  try {
    const result = await sqlQuery(strSql);
    // 模拟真实场景
    const resultList = result.map((item) => ({
      ...item,
      dptAirportName,
      dptCityName,
      arrCityName,
      arrAirportName,
      dptTime: dptDate, // 模拟日期选择
      dptTimeStr: dayjs(item.dptTime).format("HH:mm"),
      arrTimeStr: dayjs(item.arrTime).format("HH:mm"),
      price: Math.floor(Math.random() * (1000 - 100 + 1)) + 100, // 设置个随机数即可
    }));
    res.send({
      code: 1,
      message: "请求成功",
      result: resultList,
    });
  } catch (err) {
    res.send({
      code: -1,
      message: "请求失败",
    });
  }
});
module.exports = router;
