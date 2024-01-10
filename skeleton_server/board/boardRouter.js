const express = require("express");
const router = express.Router();
const boardDAO = require("./boardDAO");
// const userDAO = require("../user/userDAO");

//function 대신 async 넣어도 되나?
router.get("/boardList", (req, res, next) => {
  console.log("boardList loading...");
  const data = req.query;
  //res.query.. body가 아니라..
  //여기서 boardList가 맞나?
  boardDAO.boardList(data, (resp) => {
    res.send(resp);
  });
});

module.exports = router;
