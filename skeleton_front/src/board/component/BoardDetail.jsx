// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import React, { useCallback, useState, useEffect } from "react";

// const BoardDetail = () => {
//   //라우터에 의해 내가 출력되었는데, 출력시킨 path조건에서 데이터 획득
//   //즉 자신은 board/1 이런 구조의 url에 의해 실행될 것이므로 1값을 획득

//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [boardDetail, setBoardDetail] = useState({
//     name: "",
//     content: "",
//     title: "",
//     cnt: "",
//     createAt: "",
//   });
//   const getBoardDetail = async () => {
//     //콜을 안 햇음.
//     const resp = await axios.get("http://localhost:8000/boards/board/" + id);
//     setBoardDetail(resp.data.data); //resp.data 여기까진 예약어  여기다 내 data까지 추가
//   };

//   const deleteBoard = async (id) => {
//     //버튼 클릭시에 호출되어.. 서버에 매개변수 삭제되게 요청
//     //삭제 후 화면 목록으로 자동 전환
//   };

//   useEffect(() => {
//     getBoardDetail;
//   }, []);

//   return (
//     <main id="main">
//       <section className="intro-single">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-lg-8">
//               <div className="title-single-box">
//                 <h1 className="title-single">게시물 상세</h1>
//                 <span className="color-text-a">board</span>
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
//                     <td>타이틀</td>
//                     <td>{boardDetail.title}</td>
//                   </tr>
//                   <tr>
//                     <td>내용</td>
//                     <td>{boardDetail.content}</td>
//                   </tr>
//                   <tr>
//                     <td>작성일</td>
//                     <td>{boardDetail.createAt}</td>
//                   </tr>
//                   <tr>
//                     <td colSpan="2" className="text-end">
//                       <button
//                         type="button"
//                         className="btn btn-primary btn-sm"
//                         onClick={() => navigate("/board/list")}
//                       >
//                         목록
//                       </button>{" "}
//                       <button
//                         type="submit"
//                         className="btn btn-warning btn-sm"
//                         onClick={() =>
//                           navigate("/board/update/" + boardDetail.id)
//                         }
//                       >
//                         수정
//                       </button>{" "}
//                       <button
//                         type="submit"
//                         className="btn btn-warning btn-sm"
//                         onClick={() => deleteBoard(boardDetail.id)}
//                       >
//                         삭제
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

// export default BoardDetail;
//////////////////////////////////////////////////////////////////////////////////////
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";

const BoardDetail = () => {
  const navigate = useNavigate();

  //라우터에의해 내가 출력되었는데.. 출력시킨 path 조건에서 데이터 획득..
  //즉 자신은 board/1 이런 구조의 url 에 의해 실행.. 1 값 획득..
  const { id } = useParams(); // 현재 경로에서 추출한 매개변수(parameter)를 가져옴
  //"/users/123"이라면 id는 "123"

  //서버에서 받은 데이터.. 초기값 비어 있는
  const [board, setBoard] = useState({
    name: "",
    content: "", //
    title: "", //
    cnt: "",
    createdAt: "", //
  });

  //서버 연동을 위한 함수.. 어디선가 호출한다..
  //이게 아무것도 안 뜨는데....?
  const getBoardDetail = async () => {
    const resp = await axios.get("http://localhost:8000/boards/board/" + id);
    setBoard(resp.data.data); // 서버에서 받아온 특정 글의 상세 정보가 담겨 있음
  };

  const deleteBoard = async (id) => {
    //버튼 클릭시에 호출되어.. 서버에 매개변수 데이터 삭제되게 요청..
    //삭제후 화면 목록으로 자동 전환..
    await axios.post("http://localhost:8000/boards/delete/" + id);
    navigate("/board/list");
  };

  useEffect(() => {
    getBoardDetail(); //이 함수는 컴포넌트가 렌더링될 때 한 번 실행됩니다.
  }, []); //빈 배열이므로, 해당 효과는 컴포넌트가 처음 마운트될 때만 실행되고, 그 이후에는 다시 실행되지 않습니다.
  // 컴포넌트가 처음 렌더링될 때 getBoardDetail 함수를 호출하여 특정 글의 상세 정보를 서버에서 가져오게 합니다.
  //이렇게 함으로써 해당 컴포넌트가 화면에 표시되는 시점에 특정 글의 상세 정보를 가져와서 렌더링할 수 있습니다.
  return (
    <main id="main">
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">게시물 상세</h1>
                <span className="color-text-a">board</span>
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
                    <td>타이틀</td>
                    <td>{board.title}</td>
                  </tr>
                  <tr>
                    <td>내용</td>
                    <td>{board.content}</td>
                  </tr>
                  <tr>
                    <td>작성일</td>
                    <td>{board.createdAt}</td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="text-end">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate("/board/list")}
                      >
                        목록
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={() => navigate("/board/update/" + board.id)}
                      >
                        수정
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={() => deleteBoard(board.id)}
                      >
                        삭제
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
export default BoardDetail;
