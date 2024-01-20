const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const nunjucks = require("nunjucks");

//프로젝트 루트에 .env 파일 이용
//다른 폴더, 파일을 이용하려면 매개변수에 지정
require("dotenv").config();
//config 메서도로 .env 파일의 내용이 읽혀와서, 각 행의 "키=값" 형태로 정의된 환경 변수들이 현재 프로세스의 환경 변수로 설정됩니다.

const homeRouter = require("./home/homeRouter");
const userRouter = require("./user/userRouter");
const boardRouter = require("./board/boardRouter"); //백엔드 폴더에 있는 카테고리별 라우터js파일 등록

const app = express(); //express()는 함수, express 는 함수가 아닌  객체. 모듈을 사용할 때는 반드시 함수를 호출해야 함.
app.set("view engine", "html"); //express.set 뷰엔진이 html
nunjucks.configure("common/views", {
  //nunjucks.configure명령어를 통해 nunjucks와 express 연결
  //Nunjucks 템플릿 파일이 위치한 디렉토리 경로가 common/views
  express: app,
  watch: true,
  //express: app를 사용하여 Express 애플리케이션을 Nunjucks에 등록하고, watch: true는 템플릿 파일의 변경을 감지하여 자동으로 다시 로드하도록 설정합니다.
});

app.use(morgan("dev"));
//morgan은 HTTP 요청 로깅을 위한 미들웨어로, 개발 환경에서는 "dev" 형식으로 로깅합니다. 외에도 common, short, tiny 등등 방식이 있음
app.use(cors());
app.use(express.static(path.join(__dirname, "public"))); // "public" 디렉토리에 있는 정적 파일들을 제공합니다. 클라이언트에서 해당 디렉토리의 파일에 접근할 수 있게 해줍니다.

//클라이언트 요청 데이터, 응답 데이터를 위해서
app.use(express.json());
//Express에서 JSON 데이터를 사용하려면
app.use(express.urlencoded({ extended: true }));

//개발자가 각 파일로 분리시킨 라우터 등록
//http://localhost:8000/users/signup
app.use("/", homeRouter);
app.use("/users", userRouter); ///users" 경로로 들어오는 요청은 userRouter에서 처리
app.use("/boards", boardRouter); //boards/list 말고 boards로 수정

//404
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url}  없습니다`);
  error.status = 404; //이 404 에러도 다음 미들웨어에 전달되어 최종적으로 밑에서 처리하게 되는거임
  //에러 발생.. 아래의 미들웨어가 처리 거임
  next(error);
});

//error handle middleware... 에러 템플릿 렌더링해서 에러 메시지 및 정보를 해당 템플릿에 전달
//에러 전문 middleware는 매개변수가 4개
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV != "production" ? err : {};
  res.status(err.status || 500);
  res.render("error"); //error.html
});

app.listen(8000, () => {
  console.log(8000, "번 포트에서 대기중..");
});
