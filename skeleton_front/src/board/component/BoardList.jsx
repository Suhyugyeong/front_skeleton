import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const BoardList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: "",
    title: "",
    name: "",
    createAt: "",
    cnt: 0,
  });
  const changeData = useCallback((e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }, []);
  const boardList = useCallback(
    async (e) => {
      e.preventDefault();
      const resp = await axios.post("http://localhost:8000/users/signin", data);
      if (resp.data.status === 500) window.alert(resp.data.message);
      else navigate("/");
    },
    [data, navigate]
  );

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
                  <tr>
                    {/* 이 위치에 데이터가 들어갈 것이다... */}
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.name}</td>
                    <td>{data.createAt}</td>
                    <td>{data.cnt}</td>
                  </tr>
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
