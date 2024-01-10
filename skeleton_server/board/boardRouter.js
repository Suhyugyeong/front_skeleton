const express = require("express");
const router = express.Router();
const boardDAO = require("./boardDAO");
// const userDAO = require("../user/userDAO");

//유저 요청이 들어오면 실행
//http://localhose:8000/boards/boadrdList
//function 대신 async 넣어도 되나?
router.get("/boardList", (req, res, next) => {
  console.log("board list loading...");
  const data = req.body;
  //여기서 boardList가 맞나?
  userDAO.boardList(data, (resp) => {
    res.send(resp);
  });
});

module.exports = router;
