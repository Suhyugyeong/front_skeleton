// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import React, { useCallback, useState, useEffect } from "react";

// const BoardList = () => {
//   const navigate = useNavigate();
//   const [boardList, setBoardList] = useState({
//     status: "",
//     message: "",
//     data: [],
//   });

//   const getBoardList = useCallback(async () => {
//     const resp = await axios.get("http://localhost:8000/boards/boardList");
//     setBoardList(resp.data);
//   }, []); //[]추가 21페이지 나머지 식은 넘어오니까 data만직으면 됨

//   useEffect(() => {
//     //서버에서 최초에 한번만 데이터를 받아오면 되지 않을까 싶어서..
//     getBoardList();
//   }, [getBoardList]);

//   // const AddButtonClick = () => {
//   //   navigate("/board/insert");
//   // }; 안에 집어넣음

//   return (
//     <main id="main">
//       <section className="intro-single">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-lg-8">
//               <div className="title-single-box">
//                 <h1 className="title-single">Our Amazing Properties</h1>
//                 <span className="color-text-a">Grid Properties</span>
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
//               <table className="table table-striped">
//                 <thead>
//                   <tr>
//                     <th>번호</th>
//                     <th>타이틀</th>
//                     <th>이름</th>
//                     <th>작성일</th>
//                     <th>조회수</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {boardList.data.map((board) => (
//                     <tr key={board.id}>
//                       <td>{board.id}</td>
//                       <td>
//                         <Link to={"/board/detail/" + board.id}>
//                           {board.title}
//                         </Link>
//                       </td>
//                       <td>{board.name}</td>
//                       <td>{board.createAt}</td>
//                       <td>{board.cnt}</td>
//                     </tr>
//                   ))}
//                 </tbody>

//                 <tfoot>
//                   <tr>
//                     <td colSpan={5} className="text-end">
//                       <button
//                         className="btn btn-primary btn-sm"
//                         onClick={() => navigate("/board/insert")}
//                       >
//                         ADD
//                       </button>
//                     </td>
//                   </tr>
//                 </tfoot>
//               </table>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default BoardList;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";

const BoardList = () => {
  const navigate = useNavigate();

  const [boardList, setBoardList] = useState({
    //초기값으로 status, message, data를 갖는 객체를 설정
    status: "",
    message: "",
    data: [], //게시판이 여러 글을 동시에 관리하기 위해 배열로 관리
  });

  const getBoardList = useCallback(async () => {
    const resp = await axios.get("http://localhost:8000/boards/boardList"); //이 부분은 서버 측에서 구현이 되어 있어야 한다
    ///boards/boardList 엔드포인트로 GET 요청을 보내고, 받은 응답을 이용하여 setBoardList를 통해 boardList 상태를 업데이트합니다.
    setBoardList(resp.data); //setBoardList(resp.data)를 통해 boardList 상태를 서버에서 받은 데이터로 업데이트
    // 이를 통해 게시판 목록에 대한 상태가 업데이트되고, 해당 상태가 변경되면 화면이 리렌더링
  }, []); //의존성 배열이 비어있으므로 getBoardList 함수가 의존하는 외부 변수나 상태가 없다

  //초기 렌더링 시에 서버에서 최초의 게시판 목록을 가져오기 위한 useEffect
  useEffect(() => {
    getBoardList();
  }, [getBoardList]);
  //useEffect 훅을 사용하여 컴포넌트가 마운트될 때, getBoardList 함수를 호출하여 최초의 게시판 목록을 서버에서 가져오고 있습니다.
  //의존성 배열에 getBoardList를 넣어줌으로써, getBoardList 함수가 변경될 때만 이 useEffect가 호출됩니다.
  //초기 데이터 로딩을 위한 일반적 패턴
  //[getBoardList]가 변경될 때마다 useEffect를 호츨한다

  return (
    <main id="main">
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">Our Amazing Properties</h1>
                <span className="color-text-a">Grid Properties</span>
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
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>타이틀</th>
                    <th>이름</th>
                    <th>작성일</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {boardList.data.map((board) => (
                    //boardList.data 배열을 매핑하여 게시판의 각 항목을 테이블 행(<tr>)으로 만들고 있음
                    <tr key={board.id}>
                      //
                      {/* key 속성은 React에서 목록의 각 항목을 구별하는 데 사용되는 고유 식별자 */}
                      <td>{board.id}</td>
                      <td>
                        <Link to={"/board/detail/" + board.id}>
                          {/* 클릭하면 해당 게시물의 상세 페이지로 이동하도록 설정 */}
                          {/*  Link 컴포넌트는 내부적으로 클릭 이벤트를 처리하고 지정된 경로로 이동하는 기능을 제공
                        여기서 title을 클릭하면 /board/detail로 넘어가게 됨 */}
                          {board.title}
                        </Link>
                      </td>
                      <td>{board.name}</td>
                      <td>{board.createdAt}</td>
                      <td>{board.cnt}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="text-end">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate("/board/insert")} //버튼이 클릭되었을 때 실행되는 이벤트 핸들러
                      >
                        ADD
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BoardList;
