const express = require("express");
const router = express.Router();
const boardDAO = require("./boardDAO");

//function 대신 async 넣어도 되나? ㄴㄴ
router.get("/boardList", function (req, res, next) {
  console.log("boardList loading...");
  // const data = req.query; 가 아니라, data가 필요가 없으니까
  boardDAO.boardList((resp) => {
    res.json(resp); //json데이터 스타일이니까 send 대신 가독성과 의도 명시를 위해서.. 근데 어떤게 json이고 어떤게 send로 처리해야하는지 어떻게 구분함???
  });
});

router.post("/insert", (req, res, next) => {
  //get이 아니라 post..? get은 클라이언트에서 서버로 데이터를 요청할 때, 그리고 post는 클라이언트에서 서버로 데이터를 전송할 때 사용
  console.log("insert router...");
  const data = req.body; //post 방식은 request body를 통해서 데이터를 전달하는 방식
  boardDAO.insert(data, (resp) => {
    //boardInsert....여기... insert엿음
    res.json(resp); //send 대신 json
  });
});

router.get("/board/:id", function (req, res, next) {
  console.log("board router...");
  // const { id } = req.params;
  const id = req.params.id;
  boardDAO.board(id, (resp) => {
    res.json(resp); //내 식대로 하면 왜 굳이 id를 쓰냐...
  });
});
//post방식 유저입력은 post 방식으로 프론트부터 개발하는게 보편적
//get방식 프론트가 개발되기 전 백엔드 먼저개발하고 브라우저에서 직접 url입력해서 테스트 되어야

router.post("/delete/:id", function (req, res, next) {
  //url id니까 그냥 params로 받은거임
  console.log("delete router...");
  const id = req.params.id;
  boardDAO.delete(id, (resp) => {
    res.json(resp);
  });
});
router.post("/update", function (req, res, next) {
  //post는 데이터가 body ..업데이트는 body 로 받겠다..
  console.log("update router...");
  const data = req.body;
  boardDAO.update(data, (resp) => {
    res.json(resp);

    //res.send랑 res.json의 차이
    //Express.js에서 클라이언트에게 응답을 보낼 때 사용되는 두 가지 메서드
  });
});
module.exports = router;
