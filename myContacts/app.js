// app.js
const express = require("express");
require("dotenv").config({ path: "mysql/.env" }); // mysql 폴더에 있는 .env 파일을 찾아서 환경변수를 설정 **순서 중요: mysql 전
const mysql = require("./mysql"); // mysql 폴더의 index.js

const app = express();

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

// // 라우터
// app.get("/", (req, res) => {
//   res.send("Hello, Node!");
// });

// app.use("/contacts", require("./routes/contactRoutes")); // 미들웨어 등록

app.listen(3000, () => {
  console.log("서버 실행 중");
});

// // 고객 정보 조회 라우터
// app.get("/customers", async (req, res) => {
//   const customers = await mysql.query("customerList"); // sql.js 파일에 작성된 customerList 쿼리를 실행
//   console.log(customers);
//   res.send(customers);
// });

// // 고객 정보 추가 라우터
// app.post("/customers/insert", async (req, res) => {
//   console.log(req.body);
//   const result = await mysql.query("customerInsert", req.body.param);
//   res.send(result);
// });

// // 고객 정보 수정 라우터
// app.put("/customers/update", async (req, res) => {
//   const result = await mysql.query("customerUpdate", req.body.param);
//   res.send(result); // 결과를 클라이언트로 보냄
// });

// // 고객 정보 삭제 라우터
// app.delete('/customers/delete/:id', async (req, res) => {
//   const {id} = req.params; // 라우트 경로의 :id에 매핑되는 값
//   const result = await mysql.query("customerDelete", id);
//   res.send(result); // 결과를 클라이언트로 보냄
// });

app.use("/customers", require("./routes/customerRoutes"));
