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
        {/* /board/list  대신 list */}
        <Route path="/insert" element={<BoardInsert />} />
        <Route path="/detail/:id" element={<BoardDetail />} />
        {/* /board/:id가 아니라 detail/:id로 들어가야됨 근데 왜? */}
        <Route path="/update/:id" element={<BoardUpdate />} />
      </Routes>
    </div>
  );
};

export default BoardMain;
