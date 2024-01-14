// import React, { useCallback, useState } from "react";
// import { useNavigate } from "react-router";
// import axios from "axios";

// const SignUp = () => {
//   //url path조정하려고 useNavi씀
//   const navigate = useNavigate();

//   //constrolled component를 위해서
//   const [data, setData] = useState({ name: "", email: "", password: "" });
//   //유저 입력 변경 이벤트..
//   const changeData = useCallback((e) => {
//     setData((data) => ({ ...data, [e.target.name]: e.target.value }));
//   }, []);
//   //submit 버튼 클릭 이벤트
//   const signup = useCallback(
//     async (e) => {
//       e.preventDefault();
//       //서버연동
//       const resp = await axios.post("http://localhost:8000/users/signup", data);
//       if (resp.data.status === 500) window.alert("사용자가 존재합니다");
//       //첫 화면으로 화면 전환
//       else navigate("/");
//     },
//     [data, navigate]
//   );

//   return (
//     <main id="main">
//       {/* <!-- ======= Intro Single ======= --> */}
//       <section className="intro-single">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-lg-8">
//               <div className="title-single-box">
//                 <h1 className="title-single">
//                   We Do Great Design For Creative Folks
//                 </h1>
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
//                     About
//                   </li>
//                 </ol>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <!-- End Intro Single-->

//         <!-- ======= About Section ======= --> */}
//       <section className="section-about">
//         <div className="container">
//           {/* ajax로 서버에 유저 입력 데이터를 전송하 것이므로, ajax에서 서버 url 지정, http request method를 지정
//           form 태그를 선언하지만, method, action 속성을 지정하지 않아도 됨.. */}
//           <form className="row">
//             <div className="col-sm12 position-relative form-group mb-3">
//               <label htmlFor="email" className="form-label">
//                 email
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={data.email}
//                 onChange={changeData}
//               />
//             </div>
//             <div className="col-sm12 position-relative form-group mb-3">
//               <label htmlFor="password" className="form-label">
//                 password
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 value={data.password}
//                 onChange={changeData}
//               />
//             </div>
//             <div className="col-sm12 position-relative form-group mb-3">
//               <label htmlFor="name" className="form-label">
//                 name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={data.name}
//                 onChange={changeData}
//               />
//             </div>

//             <div className="col-sm12 position-relative form-group">
//               <button
//                 type="submit"
//                 className="btn btn-danger btn-sm"
//                 onClick={signup}
//               >
//                 send
//               </button>
//               <button type="reset" className="btn btn-primary btn-sm">
//                 reset
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       {/* <!-- =======Team Section ======= --> */}
//       <section className="section-agents section-t8">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="title-wrap d-flex justify-content-between">
//                 <div className="title-box">
//                   <h2 className="title-a">Meet Our Team</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-4">
//               <div className="card-box-d">
//                 <div className="card-img-d">
//                   <img
//                     src="/images/agent-7.jpg"
//                     alt=""
//                     className="img-d img-fluid"
//                   />
//                 </div>
//                 <div className="card-overlay card-overlay-hover">
//                   <div className="card-header-d">
//                     <div className="card-title-d align-self-center">
//                       <h3 className="title-d">
//                         <a href="agent-single.html" className="link-two">
//                           Margaret Sotillo
//                           <br /> Escala
//                         </a>
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="card-body-d">
//                     <p className="content-d color-text-a">
//                       Sed porttitor lectus nibh, Cras ultricies ligula sed magna
//                       dictum porta two.
//                     </p>
//                     <div className="info-agents color-a">
//                       <p>
//                         <strong>Phone: </strong> +54 356 945234
//                       </p>
//                       <p>
//                         <strong>Email: </strong> agents@example.com
//                       </p>
//                     </div>
//                   </div>
//                   <div className="card-footer-d">
//                     <div className="socials-footer d-flex justify-content-center">
//                       <ul className="list-inline">
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i
//                               className="bi bi-facebook"
//                               aria-hidden="true"
//                             ></i>
//                           </a>
//                         </li>
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i className="bi bi-twitter" aria-hidden="true"></i>
//                           </a>
//                         </li>
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i
//                               className="bi bi-instagram"
//                               aria-hidden="true"
//                             ></i>
//                           </a>
//                         </li>
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i
//                               className="bi bi-linkedin"
//                               aria-hidden="true"
//                             ></i>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card-box-d">
//                 <div className="card-img-d">
//                   <img
//                     src="/images/agent-6.jpg"
//                     alt=""
//                     className="img-d img-fluid"
//                   />
//                   {/* imges/에서 /images/로 바꾸니까 해결! */}
//                 </div>
//                 <div className="card-overlay card-overlay-hover">
//                   <div className="card-header-d">
//                     <div className="card-title-d align-self-center">
//                       <h3 className="title-d">
//                         <a href="agent-single.html" className="link-two">
//                           Stiven Spilver
//                           <br /> Darw
//                         </a>
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="card-body-d">
//                     <p className="content-d color-text-a">
//                       Sed porttitor lectus nibh, Cras ultricies ligula sed magna
//                       dictum porta two.
//                     </p>
//                     <div className="info-agents color-a">
//                       <p>
//                         <strong>Phone: </strong> +54 356 945234
//                       </p>
//                       <p>
//                         <strong>Email: </strong> agents@example.com
//                       </p>
//                     </div>
//                   </div>
//                   <div className="card-footer-d">
//                     <div className="socials-footer d-flex justify-content-center">
//                       <ul className="list-inline">
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i
//                               className="bi bi-facebook"
//                               aria-hidden="true"
//                             ></i>
//                           </a>
//                         </li>
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i className="bi bi-twitter" aria-hidden="true"></i>
//                           </a>
//                         </li>
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i
//                               className="bi bi-instagram"
//                               aria-hidden="true"
//                             ></i>
//                           </a>
//                         </li>
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i
//                               className="bi bi-linkedin"
//                               aria-hidden="true"
//                             ></i>
//                           </a>
//                         </li>
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i
//                               className="bi bi-dribbble"
//                               aria-hidden="true"
//                             ></i>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card-box-d">
//                 <div className="card-img-d">
//                   <img
//                     src="/images/agent-5.jpg"
//                     alt=""
//                     className="img-d img-fluid"
//                   />
//                 </div>
//                 <div className="card-overlay card-overlay-hover">
//                   <div className="card-header-d">
//                     <div className="card-title-d align-self-center">
//                       <h3 className="title-d">
//                         <a href="agent-single.html" className="link-two">
//                           Emma Toledo
//                           <br /> Cascada
//                         </a>
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="card-body-d">
//                     <p className="content-d color-text-a">
//                       Sed porttitor lectus nibh, Cras ultricies ligula sed magna
//                       dictum porta two.
//                     </p>
//                     <div className="info-agents color-a">
//                       <p>
//                         <strong>Phone: </strong> +54 356 945234
//                       </p>
//                       <p>
//                         <strong>Email: </strong> agents@example.com
//                       </p>
//                     </div>
//                   </div>
//                   <div className="card-footer-d">
//                     <div className="socials-footer d-flex justify-content-center">
//                       <ul className="list-inline">
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i
//                               className="bi bi-facebook"
//                               aria-hidden="true"
//                             ></i>
//                           </a>
//                         </li>
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i className="bi bi-twitter" aria-hidden="true"></i>
//                           </a>
//                         </li>
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i
//                               className="bi bi-instagram"
//                               aria-hidden="true"
//                             ></i>
//                           </a>
//                         </li>
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i
//                               className="bi bi-linkedin"
//                               aria-hidden="true"
//                             ></i>
//                           </a>
//                         </li>
//                         <li className="list-inline-item">
//                           <a href="#" className="link-one">
//                             <i
//                               className="bi bi-dribbble"
//                               aria-hidden="true"
//                             ></i>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <!-- End About Section--> */}
//     </main>
//   );
// };

// export default SignUp;

import React, { useCallback, useState } from "react";
//useCallback 콜백 함수를 메모이제이션(해당 함수의 결과를 캐시하여, 동일한 입력에 대한 연산이 반복되지 않도록 함)한다
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  //url path 조정하려고..
  //라우터의 전환을 처리한다
  const navigate = useNavigate();
  //controlled component 를 위해서..
  const [data, setData] = useState({ name: "", email: "", password: "" });
  //유저 입력 변경 이벤트..
  //초기값은 name, email, password
  const changeData = useCallback((e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    //...data 데이터 객체의 현재 속성을 새로운 객체에 그대로 복제
    // 이벤트가 발생한 html요소의 name 속성(밑에 input으로 받는 email, password 등 다 name 속성)에 e.target.value라는 사용자가 입력한 값을 추가하거나 기존 속성을 업데이트
  }, []); //의존성 배열이 빈배열[] 이기 때문에 함수는 컴포넌트가 마운트될 때 한 번만 생성됨

  //submit 버튼 클릭 이벤트..
  const signup = useCallback(
    async (e) => {
      e.preventDefault(); //폼 제출시 기본동작인 새롤고침을 방지
      //서버 연동..
      const resp = await axios.post("http://localhost:8000/users/signup", data); //서버에 post 요청을 보내고 data 객체를 전송한다
      if (resp.data.status === 500) window.alert("사용자가 존재합니다.");
      //첫 화면으로 화면 전환..
      else navigate("/");
    },
    [data, navigate]
    //이 콜백함수가 data에 의존하고 있기 때문에 data객체가 변경될 때마다 새로운 함수가 생성
    //이 콜백함수가 navigate에 의존하고 있기 때문에 navigate 함수가 변경될 때마다 새로운 함수가 생성
  );
  return (
    <main id="main">
      {/* <!-- ======= Intro Single ======= --> */}
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">
                  We Do Great Design For Creative Folks
                </h1>
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
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Intro Single--> */}

      {/* <!-- ======= About Section ======= --> */}
      <section className="section-about">
        <div className="container">
          {/* ajax 로 서버에 유저 입력 데이터를 전송할 것임으로.. 
          ajax 에서 서버 url 지정, http request method 지정한다..
          그럼으로 form 태그는 선언하지만. method, action 속성을 지정하지 않아도 된다.
          label에서 htmlFor임 */}
          <form className="row">
            <div className="col-sm12 position-relative form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={data.email}
                // 이런 부분들 주의!!
                onChange={changeData}
              />
            </div>
            <div className="col-sm12 position-relative form-group mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={data.password}
                onChange={changeData}
              />
            </div>
            <div className="col-sm12 position-relative form-group mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={data.name}
                onChange={changeData}
              />
            </div>

            <div className="col-sm12 position-relative form-group">
              <button
                type="submit"
                className="btn btn-danger btn-sm"
                onClick={signup}
              >
                send
              </button>
              <button type="reset" className="btn btn-primary btn-sm">
                reset
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* <!-- =======Team Section ======= --> */}
      <section className="section-agents section-t8">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Meet Our Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card-box-d">
                <div className="card-img-d">
                  {/* 이 컴포넌트가 라우팅이 되는 조건...
                  http://localhost:5173/user/images/agent-7.jpg*/}{" "}
                  <img
                    src="/images/agent-7.jpg"
                    alt=""
                    className="img-d img-fluid"
                  />
                </div>
                <div className="card-overlay card-overlay-hover">
                  <div className="card-header-d">
                    <div className="card-title-d align-self-center">
                      <h3 className="title-d">
                        <a href="agent-single.html" className="link-two">
                          Margaret Sotillo
                          <br /> Escala
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-d">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                      dictum porta two.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
                    </div>
                  </div>
                  <div className="card-footer-d">
                    <div className="socials-footer d-flex justify-content-center">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i
                              className="bi bi-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i
                              className="bi bi-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i
                              className="bi bi-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-box-d">
                <div className="card-img-d">
                  <img
                    src="/images/agent-6.jpg"
                    alt=""
                    className="img-d img-fluid"
                  />
                </div>
                <div className="card-overlay card-overlay-hover">
                  <div className="card-header-d">
                    <div className="card-title-d align-self-center">
                      <h3 className="title-d">
                        <a href="agent-single.html" className="link-two">
                          Stiven Spilver
                          <br /> Darw
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-d">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                      dictum porta two.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
                    </div>
                  </div>
                  <div className="card-footer-d">
                    <div className="socials-footer d-flex justify-content-center">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i
                              className="bi bi-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i
                              className="bi bi-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i
                              className="bi bi-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i
                              className="bi bi-dribbble"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-box-d">
                <div className="card-img-d">
                  <img
                    src="/images/agent-5.jpg"
                    alt=""
                    className="img-d img-fluid"
                  />
                </div>
                <div className="card-overlay card-overlay-hover">
                  <div className="card-header-d">
                    <div className="card-title-d align-self-center">
                      <h3 className="title-d">
                        <a href="agent-single.html" className="link-two">
                          Emma Toledo
                          <br /> Cascada
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-d">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                      dictum porta two.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
                    </div>
                  </div>
                  <div className="card-footer-d">
                    <div className="socials-footer d-flex justify-content-center">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i
                              className="bi bi-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i
                              className="bi bi-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i
                              className="bi bi-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i
                              className="bi bi-dribbble"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section--> */}
    </main>
  );
};

export default SignUp;
