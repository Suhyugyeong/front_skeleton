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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
