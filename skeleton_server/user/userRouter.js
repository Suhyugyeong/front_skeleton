const express = require("express");
const router = express.Router();
const userDAO = require("./userDAO");

//유저 업무와 관련된 요청이 들어왔을 때 그 요청을 처리하는 역할
//http://localhost:8000/users/signup
router.post("/signup", async (req, res, next) => {
  console.log("user router, singup...");
  //front전달 데이터 획득
  const data = req.body;
  userDAO.signup(data, (resp) => {
    //이 함수는 사용자 등록을 담당하며, 콜백 함수 (resp) => { res.send(resp); }를 통해 클라이언트에 응답을 보냅니다.
    res.send(resp);
  });
});

router.post("/signin", (req, res, next) => {
  console.log("login router...");
  const data = req.body;
  userDAO.login(data, (resp) => {
    //응답
    res.send(resp);
  });
});
module.exports = router;
