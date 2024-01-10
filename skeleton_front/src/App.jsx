import { Routes, Route } from "react-router-dom";
import Header from "./home/component/Header";
import Footer from "./home/component/Footer";
import HomeMain from "./home/HomeMain";
import UserMain from "./user/UserMain";
import BoardMain from "./board/BoardMain";

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
        <Route path="/user/*" element={<UserMain />} />
        <Route path="/board/*" element={<BoardMain />} />
        {/* 이거 수정 ? app.js 말고 APP.jsx? */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
