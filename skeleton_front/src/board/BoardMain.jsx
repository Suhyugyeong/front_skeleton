import { Route, Routes } from "react-router-dom";
import BoardList from "./component/BoardList";

const BoardMain = () => {
  return (
    <div>
      <h2>Board Main</h2>
      <Routes>
        <Route path="/list" element={<BoardList />} />
        {/* /board/list  대신 list */}
      </Routes>
    </div>
  );
};

export default BoardMain;
