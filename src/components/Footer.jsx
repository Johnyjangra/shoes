import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerlogo from "../assets/images/svg/footerlogo.svg";
import footfb from "../assets/images/svg/footfb.svg";
import foottwit from "../assets/images/svg/foottwit.svg";
import footgoogle from "../assets/images/svg/footgoogle.svg";

const Footer = () => {
  return (
    <footer className="bg_black py-5">
      <Container>
        <Row className="justify-content-between">
          <Col lg={4}>
            <div className="text-lg-start text-center">
              <a href="">
                <img src={footerlogo} alt="footerlogo" />
              </a>
              <p className="ff_poppins fw_400 fs_xsm clr_lightwhite ">
                Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
                euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet
                nulla in leo ullamcorper, in finibus elit porta.{" "}
              </p>
              <div className="mt-5">
                <a href="#">
                  <img className="transform_hover" src={footfb} alt="footfb" />
                </a>
                <a href="#">
                  <img
                    className="ms-4 transform_hover"
                    src={foottwit}
                    alt="foottwit"
                  />
                </a>
                <a href="#">
                  <img
                    className="ms-4 transform_hover"
                    src={footgoogle}
                    alt="footgoogle"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7} className="pt-lg-5">
            <Row className="mt-lg-0 mt-4 pt-5">
              <Col md={3} sm={4} xs={6}>
                <div className="text-lg-start text-center">
                  <p className="ff_poppins fw_600 fs_sm clr_white">
                    CUSTOM LINKS
                  </p>
                  <ul className="ps-0 mb-0">
                    <li className="pt-3">
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite clr_white_hover"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="pt-3">
                      {" "}
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite clr_white_hover"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={3} sm={4} xs={6}>
                <div className="text-lg-start text-center">
                  <p className="ff_poppins fw_600 fs_sm clr_white">
                    CUSTOM LINKS
                  </p>
                  <ul className="ps-0 mb-0">
                    <li className="pt-3">
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite clr_white_hover"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="pt-3">
                      {" "}
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite clr_white_hover"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="pt-3">
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite clr_white_hover"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={3} sm={4} xs={6} className="mt-sm-0 mt-4">
                <div className="text-lg-start text-center">
                  <p className="ff_poppins fw_600 fs_sm clr_white">
                    CUSTOM LINKS
                  </p>
                  <ul className="ps-0 mb-0">
                    <li className="pt-3">
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite clr_white_hover"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="pt-3">
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite clr_white_hover"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={3} sm={4} xs={6} className="mt-md-0 mt-4">
                <div className="text-lg-start text-center">
                  <p className="ff_poppins fw_600 fs_sm clr_white">
                    CUSTOM LINKS
                  </p>
                  <ul className="ps-0 mb-0">
                    <li className="pt-3">
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite clr_white_hover"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="pt-3">
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite clr_white_hover"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>{" "}
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
