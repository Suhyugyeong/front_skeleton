import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
const BoardList = () => {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState({
    status: "",
    message: "",
    data: [],
  });

  const getBoardList = useCallback(async () => {
    const resp = await axios.get("http://localhost:8000/boards/boardList");
    setBoardList(resp.data);
  });

  useEffect(() => {
    //서버에서 최초에 한번만 데이터를 받아오면 되지 않을까 싶어서..
    setBoardList();
  }, [getBoardList]);

  return (
    <main id="main">
      <section class="intro-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">Our Amazing Properties</h1>
                <span class="color-text-a">Grid Properties</span>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <nav
                aria-label="breadcrumb"
                class="breadcrumb-box d-flex justify-content-lg-end"
              >
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Properties Grid
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class="property-grid grid">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <table class="table table-striped">
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
                    <tr key={board.id}>
                      <td>{board.id}</td>
                      <td>{board.title}</td>
                      <td>{board.name}</td>
                      <td>{board.createAt}</td>
                      <td>{board.cnt}</td>
                    </tr>
                  ))}
                </tbody>

                <tfoot>
                  <tr>
                    <td colSpan={5} class="text-end"></td>
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
