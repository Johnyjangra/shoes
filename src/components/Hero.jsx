import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import redbigshoe from "../assets/images/svg/redbigshoe.svg";
import yellowstart from "../assets/images/svg/yellowstart.svg";
import minus from "../assets/images/svg/minus.svg";
import plus from "../assets/images/svg/plus.svg";
import symbol1 from "../assets/images/svg/symbol1.svg";
import heart from "../assets/images/svg/heart.svg";
import shoe1 from "../assets/images/svg/shoe1.svg";
import shoe2 from "../assets/images/svg/shoe2.svg";
import shoe3 from "../assets/images/svg/shoe3.svg";
import shoe4 from "../assets/images/svg/shoe4.svg";
import share from "../assets/images/svg/share.svg";
import fb from "../assets/images/svg/fb.svg";
import twit from "../assets/images/svg/twit.svg";
import redp from "../assets/images/svg/redp.svg";
import google from "../assets/images/svg/google.svg";

const Hero = () => {
  const [first, setfirst] = useState(0);
  return (
    <section className="mt-lg-5 ">
      <Container className="pt-4">
        <Row className="align-items-center">
          <Col lg={6} md={11} className="m-lg-0 m-auto">
            <div className={first === 0 ? "d-block" : "d-none"}>
              <img className="w-100" src={redbigshoe} alt="redbigshoe" />
            </div>
            <div className={first === 1 ? "d-block" : "d-none"}>
              <img className="w-100" src={shoe1} alt="shoe1" />
            </div>
            <div className={first === 2 ? "d-block" : "d-none"}>
              <img className="w-100" src={shoe3} alt="shoe1" />
            </div>
            <div className={first === 3 ? "d-block" : "d-none"}>
              <img className="w-100" src={shoe4} alt="shoe1" />
            </div>
            <div className="">
              <div className="mt-4 d-flex overflow_x_scroll example">
                <Col className="ms-3">
                  <a href="#">
                    <img
                      className="w-100 min-wid-137"
                      src={shoe1}
                      alt="shoe1"
                    />
                  </a>
                </Col>
                <Col className="ms-3">
                  <a href="#">
                    <img
                      className="w-100 min-wid-137"
                      src={shoe2}
                      alt="shoe2"
                    />
                  </a>
                </Col>
                <Col className="ms-3">
                  <a href="#">
                    <img
                      className="w-100 min-wid-137"
                      src={shoe3}
                      alt="shoe3"
                    />
                  </a>
                </Col>
                <Col className="ms-3">
                  <a href="#">
                    <img
                      className="w-100 min-wid-137 h_103 "
                      src={shoe4}
                      alt="shoe4"
                    />
                  </a>
                </Col>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-lg-0 mt-5">
            <div>
              <h1 className="ff_poppins fw_600 fs_3xl clr_black">
                PREMIUM MENS SPORTS LATHER KEDS
              </h1>
              <div className="d-flex align-items center">
                <a href="#">
                  <img src={yellowstart} alt="yellowstart" />
                </a>
                <a href="#" className="ms-1">
                  <img src={yellowstart} alt="yellowstart" />
                </a>
                <a href="#" className="ms-1">
                  <img src={yellowstart} alt="yellowstart" />
                </a>
                <a href="#" className="ms-1">
                  <img src={yellowstart} alt="yellowstart" />
                </a>
                <a href="#" className="ms-1">
                  <img src={yellowstart} alt="yellowstart" />
                </a>
                <p className="ff_poppins fw_400 clr_lightestgrey fs_lg ps-2">
                  ( 5 Customer Review )
                </p>
              </div>
              <p className="ff_poppins fw_400 clr_lightestgrey fs_lg ps-2 line_height">
                Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
                euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet
                nulla in leo ullamcorper, in finibus elit porta. Sed eget congue
                neque, mattis finibus neque. In vel dolor ac augue pretium{" "}
              </p>
              <div className="d-flex align-items-center mt-5 pt-3">
                <p className="ff_poppins fw_500 fs_lg clr_black mb-0">Qty: </p>
                <div className="d-flex buttn align-items-center py-2 px-3 ms-4">
                  <a href="#">
                    <img src={minus} alt="minus" />
                  </a>
                  <h1 className="ff_Josefin fw_400 fs_lg clr_lightblack mb-0 px-3 pt-1">
                    1{" "}
                  </h1>
                  <a href="#">
                    <img src={plus} alt="plus" />
                  </a>
                </div>
                <button className="bg_green green_brdr ff_poppins fw_500 fs_lg clr_white py-2 px-4 radius_50 ms-3 cart_btn_hover">
                  Add to Cart
                </button>
              </div>
              <div className="d-flex align-items-center mt-4">
                <p className="ff_poppins fw_500 fs_lg clr_black mb-0">Size: </p>
                <form action="" className="ms-4 ">
                  <select className="" name="" id="">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
                  </select>
                </form>
              </div>
              <div className="d-flex align-items-center mt-4">
                <p className="ff_poppins fw_500 fs_lg clr_black mb-0">Color:</p>
                <div className="d-flex ms-4">
                  <div className="brdr_box d-flex flex-column justify-content-center align-items-center">
                    <div
                      onClick={() => {
                        setfirst(0);
                      }}
                      className="red_box"
                    ></div>
                  </div>
                  <div className="brdr_box d-flex flex-column justify-content-center align-items-center ms-2">
                    <div
                      onClick={() => {
                        setfirst(3);
                      }}
                      className="cream_box"
                    ></div>
                  </div>
                  <div className="brdr_box d-flex flex-column justify-content-center align-items-center ms-2">
                    <div
                      onClick={() => {
                        setfirst(1);
                      }}
                      className="black_box"
                    ></div>
                  </div>
                  <div className="brdr_box d-flex flex-column justify-content-center align-items-center ms-2">
                    <div
                      onClick={() => {
                        setfirst(2);
                      }}
                      className="gray_box"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-4">
                <div className="d-flex">
                  <div>
                    <a href="#">
                      <img src={symbol1} alt="symbol1" />
                    </a>
                  </div>
                  <p className="mb-0 ps-1">
                    <a
                      className="ff_poppins fw_400 fs_sm clr_lightestblack"
                      href="#"
                    >
                      Compare{" "}
                    </a>
                  </p>
                </div>
                <div className="d-flex ms-4">
                  <div>
                    <a href="#">
                      <img src={heart} alt="heart" />
                    </a>
                  </div>
                  <p className="mb-0 ps-1">
                    <a
                      className="ff_poppins fw_400 fs_sm clr_lightestblack"
                      href="#"
                    >
                      Wishlist
                    </a>
                  </p>
                </div>
              </div>
              <div className="gray_line mt-4"></div>
              <div className="mt-4 d-flex">
                <a href="#">
                  <img className="transform_hover" src={share} alt="share" />
                </a>

                <div>
                  <a className="ms-4" href="#">
                    <img className="transform_hover" src={fb} alt="fb" />
                  </a>
                </div>
                <div>
                  <a className="ms-4" href="#">
                    <img className="transform_hover" src={twit} alt="twit" />
                  </a>
                </div>
                <div>
                  <a className="ms-4" href="#">
                    <img className="transform_hover" src={redp} alt="redp" />
                  </a>
                </div>
                <div>
                  <a className="ms-4" href="#">
                    <img
                      className="transform_hover"
                      src={google}
                      alt="google"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
