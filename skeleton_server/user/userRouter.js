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
    //resp  ??
    res.send(resp);
  });
});

module.exports = router;
