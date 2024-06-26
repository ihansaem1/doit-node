const mysql = require("mysql");
const sql = require('./sql'); // SQL 쿼리문이 작성되어 있는 파일

const pool = mysql.createPool({ // Pool 생성
    connectionLimit : process.env.MYSQL_LIMIT,
    host            : process.env.MYSQL_HOST,
    port            : process.env.MYSQL_PORT,
    user            : process.env.MYSQL_USERNAME,
    password        : process.env.MYSQL_PASSWORD,
    database        : process.env.MYSQL_DB
});

// 쿼리문을 실행하고 결과를 반환하는 함수
const query = async (alias, values) => {
    // pool.query(queryStirng, values, callback);
    return new Promise((resolve, reject) => pool.query(sql[alias], values, (error, results) => {
        if (error) {
            console.log(error);
            reject({
                error
            });
        } else resolve(results);
    }));
}

module.exports = {
    query
};