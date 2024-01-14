//일반적으로 애플리케이션을 시작하고 필요한 리소스를 로드하며 필요한 설정을 수행
//애플리케이션의 진입점, 보통 초기화 코드나 전역적인 설정이 이루어짐
//ReactDOM.render() 함수를 사용하여 App.jsx나 다른 주요 컴포넌트를 렌더링!!
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// bootstrap template의 index.html파일에 <link>로 걸리는 css를 추가한 것
//이 css가 각 component에서 class로 사용되므로 global
//이곳에서 import한 것일 뿐..
import "./assets/vendor/bootstrap-icons/bootstrap-icons.min.css";
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/CSS/style.CSS";
import "./assets/vendor/swiper/swiper-bundle.min.css";

import App from "./App.jsx";
import "./index.css";

//리액트 애플리케이션을 초기화하고 렌더링하는데 사용
//루트 리액트 렌더러 생성
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* React Router의 핵심 컴포넌트 중 하나 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
