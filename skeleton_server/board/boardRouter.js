const express = require("express");
const router = express.Router();
const boardDAO = require("./boardDAO");

//function 대신 async 넣어도 되나? ㄴㄴ
router.get("/boardList", function (req, res, next) {
  console.log("boardList loading...");
  // const data = req.query; //여기빠지고
  //res.query.. body가 아니라..
  //여기서 boardList가 맞나?
  boardDAO.boardList((resp) => {
    //여기서 data지우고 data, (resp)
    res.json(resp); //json데이터 스타일이니까 send 대신
  });
});

router.post("/insert", (req, res, next) => {
  //get이 아니라 post..? get방식으로 실행하라는 말은??
  console.log("insert router...");
  const data = req.body; //post 방식은 request body를 통해서 데이터를 전달하는 방식
  boardDAO.insert(data, (resp) => {
    //boardInsert....여기... insert엿음
    res.json(resp); //send 대신 json
  });
});

router.get("/board/:id", function (req, res, next) {});
//post방식 유저입력은 post 방식으로 프론트부터 개발하는게 보편적
//get방식 프론트가 개발되기 전 백엔드 먼저개발하고 브라우저에서 직접 url입력해서 테스트 되어야

module.exports = router;
