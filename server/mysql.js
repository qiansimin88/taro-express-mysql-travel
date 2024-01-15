const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1", // your host, usually localhost
  port: 3306,
  user: "root", // your database username
  password: "duai18268198507", // your database password
  database: "taro3-express-mysql-travel", // 数据库的名字
});

// 链接数据库
connection.connect((err) => {
  if (err) {
    console.err("数据库链接失败" + err);
    return;
  }
  console.log("数据库链接成功");
});

// 查询方法
/**
 *
 * @param {*} ruleStr sql语句
 * @returns promise
 */
const sqlQuery = (ruleStr) => {
  return new Promise((resolve, reject) => {
    connection.query(ruleStr, (err, results) => {
      if (err) {
        reject(err);
        console.log("查询失败" + err);
        return;
      }
      resolve(results);
    });
  });
};

module.exports = {
  sqlQuery,
};

// 查询
// connection.query("SELECT * FROM teacher_table", (err, results, fields) => {
//   if (err) {
//     console.log("查询失败" + err);
//     return;
//   }
//   console.log(results);
// });
