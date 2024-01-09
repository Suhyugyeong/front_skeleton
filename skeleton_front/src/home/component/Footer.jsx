import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* 
        bootstrap index.html 하단의 footer 부분 복사해서 적용
        html VS JSX 차이점 해결..
        - html 주석 제거..(==Footer 부분 나는 다 제거함)
        - a 태그를 Link로 교체
        -class 를 className으로 교체(edit의 replace 이용해서 전체바꾸기)
        */}

      <section className="section-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="widget-a">
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand">EstateAgency</h3>
                </div>
                <div className="w-body-a">
                  <p className="w-text-a color-text-a">
                    Enim minim veniam quis nostrud exercitation ullamco laboris
                    nisi ut aliquip exea commodo consequat duis sed aute irure.
                  </p>
                </div>
                <div className="w-footer-a">
                  <ul className="list-unstyled">
                    <li className="color-a">
                      <span className="color-text-a">Phone .</span>{" "}
                      contact@example.com
                    </li>
                    <li className="color-a">
                      <span className="color-text-a">Email .</span> +54 356
                      945234
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand">The Company</h3>
                </div>
                <div className="w-body-a">
                  <div className="w-body-a">
                    <ul className="list-unstyled">
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"></i>{" "}
                        <Link href="#">Site Map</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"></i>{" "}
                        <Link href="#">Legal</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"></i>{" "}
                        <Link href="#">Agent Admin</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"></i>{" "}
                        <Link href="#">Careers</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"></i>{" "}
                        <Link href="#">Affiliate</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"></i>{" "}
                        <Link href="#">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand">International sites</h3>
                </div>
                <div className="w-body-a">
                  <ul className="list-unstyled">
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i>{" "}
                      <Link href="#">Venezuela</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i>{" "}
                      <Link href="#">China</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i>{" "}
                      <Link href="#">Hong Kong</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i>{" "}
                      <Link href="#">Argentina</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i>{" "}
                      <Link href="#">Singapore</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i>{" "}
                      <Link href="#">Philippines</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="nav-footer">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link href="#">Home</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">About</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">Property</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">Blog</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="socials-a">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link href="#">
                      <i className="bi bi-facebook" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">
                      <i className="bi bi-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">
                      <i className="bi bi-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">
                      <i className="bi bi-linkedin" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="copyright-footer">
                <p className="copyright color-text-a">
                  &copy; Copyright
                  <span className="color-a">EstateAgency</span> All Rights
                  Reserved.
                </p>
              </div>
              <div className="credits">
                Design by
                <Link href="https://bootstrapmade.com/">BootstrapMade</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
