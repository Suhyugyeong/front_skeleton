var express = require("express");
var router = express.Router(); //express의 라우터 객체를 생성

router.get("/", function (req, res, next) {
  //req, res, next는 Express 미들웨어에서 사용되는 매개변수
  //next: 이 매개변수는 다음 미들웨어 함수를 호출하는 함수입니다. 미들웨어 함수는 보통 next를 호출하여 다음 미들웨어로 제어를 전달하게 되며, 이를 통해 여러 미들웨어가 순차적으로 실행됩니다.
  //index.html이 출력되면서 그곳에 {} 정보 넘긴 것..
  //nunjucks 설정이 app.js에 되어 있어야 하고..
  res.render("index", { title: "express" });
  // "index"라는 템플릿을 렌더링하고, { title: "express" }라는 데이터를 템플릿에 전달합니다.
});

module.exports = router; //이 라우터 객체를 모듈로 내보냅니다.
