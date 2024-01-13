const express = require("express");
const router = express.Router(); //Express.js에서 라우터 객체를 생성하는 코드
const userDAO = require("./userDAO");

//유저 업무와 관련된 요청이 들어왔을 때 그 요청을 처리하는 역할
//http://localhost:8000/users/signup
router.post("/signup", async (req, res, next) => {
  //여기서 async를 사용한 이유는 userDAO.signup 함수가 비동기 작업을 수행하기 때문..
  //일반적으로 데이터베이스 쿼리나 다른 비동기적 작업을 수행하는 함수를 호출할 때는 해당 함수가 Promise를 반환, 이를 처리하기 위해 async 사용
  //그대신 function을 사용하는 이유는 동기적 작업을 수행하거나, 비동기 작업을 수행하나 Promise를 반환하지 않는 경우
  console.log("user router, singup..."); //async는 비동기적인 작업이 필요할 때.. 아래는 왜 async 처리하지 않음?????????????????
  //front전달 데이터 획득
  const data = req.body; //req는 요청(request) 객체를 나타내며, req.body는 HTTP POST 요청의 본문(body)에 포함된 데이터
  //일반적으로 웹 애플리케이션에서 클라이언트가 서버에 데이터를 전송할 때, POST 요청을 사용하며 그 데이터는 요청의 본문(body)에 담겨 전송됩니다.
  //이 데이터를 서버에서 사용하려면 req.body를 통해 해당 데이터에 접근할 수 있습니다.
  userDAO.signup(data, (resp) => {
    //이 함수는 사용자 등록을 담당하며, 콜백 함수 (resp) => { res.send(resp); }를 통해 클라이언트에 응답을 보냅니다.
    res.send(resp);
  });
});

router.post("/signin", (req, res, next) => {
  //async 키워드는 함수 내에서 비동기 작업을 수행할 때 사용되며, 함수가 Promise를 반환하고 await 키워드를 사용할 때 필요합니다.
  //따라서 비동기 작업이 필요한 부분에 async를 사용하는 것이 일반적인 패턴입니다.
  //그럼 왜 여기서 async를 사용하지 않았는데???
  console.log("login router...");
  const data = req.body;
  userDAO.login(data, (resp) => {
    //응답
    res.send(resp);
  });
});
module.exports = router;

//const data = req.body
//클라이언트가 데이터를 서버에 전송할 때, 전송 방식에 따라 req.body를 얻기 위한 추가적인 설정이 필요할 수 있습니다.
//예를 들어, JSON 형식의 데이터를 전송하는 경우, body-parser 미들웨어를 사용하여 req.body를 파싱할 수 있습니다.
//app.use(bodyParser.json()); 만 추가하면 json 형식의 데이터도 req.body로 받을 수 있음
