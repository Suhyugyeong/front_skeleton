const express = require("express");
const router = express.Router();
const boardDAO = require("./boardDAO");

//1번
//get이니까 조회(원래 있던 게시판 목록이 안 보임, add버튼은 되나 입력버튼 눌러도 아무것도 추가 안 됨, 취소해서 돌아가도 원래 있던 게시판 목록은 안 보임 )
//게시판 목록 조회
//async 대신에 function을 넣는 이유가 도대체 뭘까???
//함수표현식/ 콜백 함수로 function(req,res,next) 형태를 가진다.. 여기서 비동기 작업을 처리하지 않는다
router.get("/boardList", function (req, res, next) {
  console.log("boardList loading...");
  // const data = req.query; 가 아니라, data가 필요가 없으니까
  boardDAO.boardList((resp) => {
    res.json(resp); //json데이터 스타일이니까 send 대신 가독성과 의도 명시를 위해서.. 근데 어떤게 json이고 어떤게 send로 처리해야하는지 어떻게 구분함???
  });
});

//2번
//게시글 등록(게시판 목록은 뜨고, add버튼 먹고, 취소해도 원래화면 잘 보임 그러나 입력버튼을 눌러도 아무런 변화가 없다, 목록보기, 수정, 삭제 다 잘 됨)
//여기서는 function 대신 화살표로 함수표현식
router.post("/insert", (req, res, next) => {
  //get이 아니라 post..? get은 클라이언트에서 서버로 데이터를 요청할 때, 그리고 post는 클라이언트에서 서버로 데이터를 전송할 때 사용
  console.log("insert router...");
  const data = req.body; //post 방식은 request body를 통해서 데이터를 전달하는 방식
  boardDAO.insert(data, (resp) => {
    //boardInsert....여기... insert엿음
    res.json(resp); //send 대신 json
  });
});

//3번
//게시글 상세보기(게시판 목록 뜨고, add버튼 먹고, 취소해도 원래화면 잘 보임, 입력버튼도 잘 됨, 그러나 게시글 상세보기 하면 내용은 안 뜸. 수정, 삭제 안됨)
router.get("/board/:id", function (req, res, next) {
  console.log("board router...");
  // const { id } = req.params;
  const id = req.params.id;
  // Express 라우터에서 URL의 동적인 부분을 가져오는 코드입니다.
  //Express에서는 :id와 같이 콜론(:)으로 시작하는 부분을 파라미터로 취급하며, 이를 req.params 객체를 통해 접근할 수 있습니다. (내장객체)
  boardDAO.board(id, (resp) => {
    res.json(resp);
  });
});
//post방식 유저입력은 post 방식으로 프론트부터 개발하는게 보편적
//get방식 프론트가 개발되기 전 백엔드 먼저개발하고 브라우저에서 직접 url입력해서 테스트 되어야

//4번
//게시글 삭제
//일반적으로 게시글 삭제는 router.delete, 게시글 수정이나 업데이트는 router.put를 사용 기존 코드와의 호환성 등의 이유로 HTTP POST를 사용하는 경우도 있음
router.post("/delete/:id", function (req, res, next) {
  //url id니까 그냥 params로 받은거임
  console.log("delete router...");
  const id = req.params.id;
  boardDAO.delete(id, (resp) => {
    res.json(resp); //작업이 완료되면 클라이언트에게 JSON 형식의 응답을 보냅니다.
  });
});

//이것도 가능한..
// router.delete("/delete/:id", function (req, res, next) {
//   console.log("delete router...");
//   const id = req.params.id;
//   boardDAO.delete(id, (resp) => {
//     res.json(resp); // 작업이 완료되면 클라이언트에게 JSON 형식의 응답을 보냄
//   });
// });

//5번
//게시글 수정
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

//기본적으로, 정보를 가져오는 경우에는 router.get을 사용하고, 데이터를 서버로 제출하는 경우에는 router.post를 사용합니다.
//그러나 이는 규칙에 국한된 것이 아니며, 상황에 따라 다르게 사용될 수 있습니다. RESTful API에서는 주로 GET 요청은 조회에, POST 요청은 생성에 사용되는 경향이 있습니다.

//req.params는 URL 경로에서 동적으로 생성된 매개변수를 가져올 때 사용되고, req.body는 HTTP 요청 본문(body)에서 데이터를 가져올 때 사용됩니다.
//어떤 것을 처리해야하는지 알때, 모를때로 구분?
