const express = require("express");
const router = express.Router();
const boardDAO = require("./boardDAO");
// const userDAO = require("../user/userDAO");

//function 대신 async 넣어도 되나?
router.get("/boardList", (req, res, next) => {
  console.log("boardList loading...");
  // const data = req.query; //여기빠지고
  //res.query.. body가 아니라..
  //여기서 boardList가 맞나?
  boardDAO.boardList((resp) => {
    //여기서 data지우고 data, (resp)
    res.json(resp); //json데이터 스타일이니까 send 대신
  });
});

module.exports = router;
