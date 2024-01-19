// import { Route, Routes } from "react-router-dom";

// import BoardList from "./component/BoardList";
// import BoardInsert from "./component/BoardInsert";
// import BoardDetail from "./component/BoardDetail";
// import BoardUpdate from "./component/BoardUpdate";

// const BoardMain = () => {
//   return (
//     <div>
//       <h2>Board Main</h2>
//       <Routes>
//         <Route path="/list" element={<BoardList />} />
//         {/* /board/list  대신 list */}
//         <Route path="/insert" element={<BoardInsert />} />
//         <Route path="/detail/:id" element={<BoardDetail />} />
//         {/* /board/:id가 아니라 detail/:id로 들어가야됨 근데 왜? */}
//         <Route path="/update/:id" element={<BoardUpdate />} />
//       </Routes>
//     </div>
//   );
// };

// // export default BoardMain;
/////////////////////////////////////////////////////////
import { Route, Routes } from "react-router-dom";

import BoardList from "./component/BoardList";
import BoardInsert from "./component/BoardInsert";
import BoardDetail from "./component/BoardDetail";
import BoardUpdate from "./component/BoardUpdate";

const BoardMain = () => {
  return (
    <div>
      <h2>Board Main</h2>
      <Routes>
        <Route path="/list" element={<BoardList />} />
        {/* 메뉴글목록, 게시글 등록화면 */}
        <Route path="/insert" element={<BoardInsert />} />
        {/* 게시글 등록하기 */}
        <Route path="/detail/:id" element={<BoardDetail />} />
        {/* 게시글 상태보기 */}
        <Route path="/update/:id" element={<BoardUpdate />} />
        {/* 게시글수정  */}
        {/* delete, 상세보기의 경우 server에서 board/board/:id, 게시글목록조회 server측 boards/boardList */}
      </Routes>
    </div>
  );
};
export default BoardMain;
