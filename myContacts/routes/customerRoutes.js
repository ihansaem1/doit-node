// /routes/customerRoutes.js
const express = require("express");
const router = express.Router();
require('dotenv').config({ path: '../mysql/.env' });
const mysql = require("../mysql")

router
  .route("/")
  .get(async (req, res) => {
    const customers = await mysql.query("customerList"); // sql.js 파일에 작성된 customerList 쿼리를 실행
    console.log(customers);
    res.send(customers);
  })
  .post(async (req, res) => {
    console.log(req.body);
    const result = await mysql.query("customerInsert", req.body.param);
    res.send(result);
  })
  .put(async (req, res) => {
    const result = await mysql.query("customerUpdate", req.body.param);
    res.send(result); // 결과를 클라이언트로 보냄
  });

router
  .route("/:id")
  .delete(async (req, res) => {
    const {id} = req.params; // 라우트 경로의 :id에 매핑되는 값
    const result = await mysql.query("customerDelete", id);
    res.send(result); // 결과를 클라이언트로 보냄
  });

module.exports = router;
