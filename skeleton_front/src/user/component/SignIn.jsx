// import React, { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const SignIn = () => {
//   const navigate = useNavigate(); //페이지 이동 담당 navigate 함수 생성

//   const [data, setData] = useState({ email: "", password: "" });
//   const changeData = useCallback((e) => {
//     setData((data) => ({ ...data, [e.target.name]: e.target.value }));
//   }, []); //입력 필드의 값이 변경될 때마다 상태가 업데이트되어 사용자의 입력을 추적
//   const login = useCallback(
//     async (e) => {
//       e.preventDefault();
//       const resp = await axios.post("http://localhost:8000/users/signin", data);
//       if (resp.data.status === 500) window.alert(resp.data.message);
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
//           <h2>Login</h2>
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

//             <div className="col-sm12 position-relative form-group">
//               <button
//                 type="submit"
//                 className="btn btn-danger btn-sm"
//                 onClick={login}
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

// export default SignIn;

import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });

  const changeData = useCallback((e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }, []);

  const login = useCallback(
    async (e) => {
      e.preventDefault();
      const resp = await axios.post("http://localhost:8000/users/signin", data);
      if (resp.data.status === 500)
        window.alert(resp.data.message); //여기가 왜 resp.data.message일까??
      else navigate("/");
    },
    [data, navigate]
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
          <h2>Login</h2>
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
            {/* <div className="col-sm12 position-relative form-group mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" 
                value={data.name} onChange={changeData}/>
            </div> */}

            <div className="col-sm12 position-relative form-group">
              <button
                type="submit"
                className="btn btn-danger btn-sm"
                onClick={login}
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

export default SignIn;
