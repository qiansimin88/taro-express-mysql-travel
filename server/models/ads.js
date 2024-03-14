// models 下 都是 接口的方法
const express = require("express");
// 路由实例
const router = express.Router();

const { sqlQuery } = require("../mysql");

// const imageList = [
//   "http://www.picsum.photos/750/120?1",
//   "http://www.picsum.photos/750/120?2",
// ];

// 1. 创建表
// const createTable = async () => {
//   try {
//     /**
//      * 如果不存在 ads 这个表就创建
//      * id int(11) not null auto_increment primary key,  id  not null: 必填 auto_increment: 自增 primary key: 设为主键
//      */
//     const createTableSql = `
//       create table if not exists ads (
//         id int(11) not null auto_increment primary key,
//         url varchar(255) not null
//       ) engine=innodb default charset=utf8;
//     `;
//     // 先删除表后创建
//     await sqlQuery(`drop table if exists ads`);
//     // 创建表
//     await sqlQuery(createTableSql);
//     // 表里面插入数据
//     imageList.forEach(async (o) => {
//       // insert into ads(id, url) values(null, ${o}) 插入表数据 并且指定值 自增的值 默认可以设置为 Null 前后两个括号的值是一一对应的
//       const sql = `insert into ads(id, url) values(null, "${o}")`;
//       await sqlQuery(sql);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// createTable();

// 2. 设置接口路径
router.get("/advertising", async (req, res) => {
  console.log(222222222222222222222222222222);
  const sql = `select * from ads`;
  try {
    const result = await sqlQuery(sql);
    res.send({
      code: 1,
      message: "成功",
      result,
    });
  } catch (e) {
    console.log(e);
    res.send({
      code: -1,
      message: "失败",
    });
  }
});

// 导出路由
module.exports = router;
