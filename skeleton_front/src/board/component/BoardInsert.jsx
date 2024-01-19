// import axios from "axios";
// import React, { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const BoardInsert = () => {
//   const navigate = useNavigate();
//   const [boardInsert, setBoardInsert] = useState({
//     name: "",
//     title: "",
//     content: "",
//   });
//   const changeData = useCallback(
//     (e) => {
//       setBoardInsert({ ...boardInsert, [e.target.name]: e.target.value });
//     },
//     [boardInsert]
//   );

//   //등록 버튼 클릭시에
//   const insertBoard = useCallback(
//     async (e) => {
//       e.preventDefault();
//       await axios.post("http://localhost:8000/boards/insert", boardInsert);
//       navigate("/board/list");
//     },
//     [navigate, boardInsert]
//   );

//   return (
//     //템플릿 껍데기
//     <main id="main">
//       <section className="intro-single">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-lg-8">
//               <div className="title-single-box">
//                 <h1 className="title-single">게시물 입력</h1>
//                 <span className="color-text-a">Insert</span>
//               </div>
//             </div>
//             <div className="col-md-12 col-lg-4">
//               <nav
//                 aria-label="breadcrumb"
//                 className="breadcrumb-box d-flex justify-content-lg-end"
//               >
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <a href="#">Home</a>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">
//                     Properties Grid
//                   </li>
//                 </ol>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="property-grid grid">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-12">
//               <table className="table">
//                 <tbody>
//                   <tr>
//                     <td>이름</td>
//                     <td>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="name"
//                         value={boardInsert.name}
//                         onChange={changeData}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>타이틀</td>
//                     <td>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="title"
//                         value={boardInsert.title}
//                         onChange={changeData}
//                       />
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>내용</td>
//                     <td>
//                       <textarea
//                         cols="80"
//                         rows="10"
//                         name="content"
//                         className="form-control"
//                         value={boardInsert.content}
//                         onChange={changeData}
//                       ></textarea>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td colSpan="2" className="text-end">
//                       <button
//                         type="button"
//                         className="btn btn-primary btn-sm"
//                         onClick={() => navigate("/board/list")}
//                       >
//                         취소
//                       </button>
//                       <button
//                         type="submit"
//                         className="btn btn-warning btn-sm"
//                         onClick={insertBoard}
//                       >
//                         입력
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default BoardInsert;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardInsert = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState({ name: "", title: "", content: "" });
  const changeData = useCallback(
    (e) => {
      //e는 이벤트 객체로, 주로 입력 요소의 값과 관련된 정보를 담고 있음
      //밑에서 [e.target.name]처럼 이벤트 객체를 사용하기 때문에 적어줘야 함
      setBoard({ ...board, [e.target.name]: e.target.value });
    },
    [board]
  ); //[board]가 변경될 때만 이 함수를 다시 만듦

  //등록 버튼 클릭시에..
  const insertBoard = useCallback(
    async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8000/boards/insert", board); //board 상태를 요청의 본문으로 포함
      //화면을 자동으로 목록으로..
      navigate("/board/list");
    },
    [navigate, board]
  );

  return (
    <main id="main">
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">게시물 입력</h1>
                <span className="color-text-a">Insert</span>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav
                aria-label="breadcrumb"
                className="breadcrumb-box d-flex justify-content-lg-end"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Properties Grid
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <tbody>
                  <tr>
                    <td>이름</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={board.name}
                        onChange={changeData}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>타이틀</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={board.title}
                        onChange={changeData}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>내용</td>
                    <td>
                      <textarea
                        cols="80"
                        rows="10"
                        name="content"
                        className="form-control"
                        value={board.content}
                        onChange={changeData}
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="text-end">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate("/board/list")}
                      >
                        취소
                      </button>{" "}
                      <button
                        type="submit"
                        className="btn btn-warning btn-sm"
                        onClick={insertBoard}
                      >
                        입력
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BoardInsert;
