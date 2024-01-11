import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardInsert = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", title: "", content: "" });

  const insert = useCallback(async (e) => {
    const resp = await axios.post("http://localhost:8000/boards/insert", data);
  });
  return (
    //템플릿 껍데기
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
                      <input type="text" className="form-control" name="name" />
                    </td>
                  </tr>
                  <tr>
                    <td>타이틀</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
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
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" className="text-end">
                      <button type="button" className="btn btn-primary btn-sm">
                        취소
                      </button>
                      {""}
                      <button type="submit" className="btn btn-warning btn-sm">
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
