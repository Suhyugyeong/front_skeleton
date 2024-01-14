//애플리케이션의 주요 컴포넌트 또는 레이아웃을 정의
//애플리케이션의 루트 컴포넌트, 일반적으로 다른 하위 컴포넌트를 포함하고 구성
//전반적인 구조와 레이아웃을 결정
import { Routes, Route } from "react-router-dom";
import Header from "./home/component/Header";
import Footer from "./home/component/Footer";
import HomeMain from "./home/HomeMain";
import UserMain from "./user/UserMain";
import BoardMain from "./board/BoardMain";

//페이지 레이아웃 및 라우팅을 설정하는 함수형 컴포넌트
const App = () => {
  return (
    <div>
      {/* Header, Footer가 전체 화면에서 항상 고정으로 나온다면, 아래처럼
      각 화면별로 Header, Footer가 상이하게 적용된다면 Route되는 Component 내에  */}
      <Header />
      {/* 각 화면이 라우팅되게 등록..
      각 업무의 첫 화면만 등록하고 그 안에서의 화면전환은 중첩 라우팅으로 처리..
      즉, XXXMain만 이곳에서 등록하고 XXX 업무에 의한 화면 라우팅은 XXXMain에 명시*/}
      <Routes>
        <Route path="/" element={<HomeMain />} />
        {/* element는 렌더링할 컴포넌트 여기서 HomeMain.jsx */}
        <Route path="/user/*" element={<UserMain />} />
        {/* 여기서 별은 와일드카드 매개변수를 나타냄. /user/ 뒤에 어떤 문자열이든 와일드카드에 해당하는 위치에 올 수 있다 */}
        <Route path="/board/*" element={<BoardMain />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
