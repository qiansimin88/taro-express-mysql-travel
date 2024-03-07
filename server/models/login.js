const express = require("express");

const router = express.Router();
const { sqlQuery } = require("../mysql");

router.post("/login", async (req, res) => {
  try {
    // post请求
    const { userPhone, password, nickName } = req.body;
    // 如果不存在 user 表 就创建一个
    const createTableSql = `
      create table if not exists user (
        id int auto_increment,
        userPhone char(11) not null,
        password char(10) not null,
        nickName char(50) not null,
        primary key (id)
      ) engine=innodb;
    `;
    await sqlQuery(createTableSql);
    // 查询是否有对应用户的手机号
    const sqlStr = `select userPhone from user where userPhone=${userPhone}`;
    const result = await sqlQuery(sqlStr);

    // result 数组 数据库查询的结果都是数组  有对应手机号，走登录流程
    if (result.length) {
      // 有对应手机号，走登录流程
      // 查询昵称 和 密码 从用户表 通过传来的手机号
      const userInfo = `select nickName,password from user where userPhone=${userPhone}`;
      const userInfoRes = await sqlQuery(userInfo);

      // 查询的密码和传入的密码一致 登录成功
      if (userInfoRes.length && userInfoRes[0].password === password) {
        // 如果昵称不一样，更新数据库 （人性化操作）
        if (nickName !== userInfoRes[0]["nickName"]) {
          const updateSql = `update user set nickName='${nickName}' where userPhone=${userPhone}`;
          await sqlQuery(updateSql);
        }
        res.send({
          code: 1,
          message: "登录成功",
          result: {
            userPhone,
            nickName,
          },
        });
      } else {
        res.send({
          code: 2,
          message: "密码错误",
        });
      }
    } else {
      // 数据库没有这个手机号 直接注册
      // 注册
      const insertSql = `insert into user(id, nickName, userPhone, password) values (null, '${nickName}', '${userPhone}', '${password}')`;
      await sqlQuery(insertSql);
      res.send({
        code: 1,
        message: "注册并登录成功",
        result: {
          userPhone,
          nickName,
        },
      });
    }
  } catch (e) {
    res.send({
      code: -1,
      message: "请求失败",
      result: e,
    });
  }
});

// 导出路由
module.exports = router;
