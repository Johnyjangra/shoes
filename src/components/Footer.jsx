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
        <Row>
          <Col lg={5}>
            <div className="text-lg-start text-center">
              <div>
                <img src={footerlogo} alt="footerlogo" />
              </div>
              <p className="ff_poppins fw_400 fs_xsm clr_lightwhite ">
                Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
                euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet
                nulla in leo ullamcorper, in finibus elit porta.{" "}
              </p>
              <div className="mt-5">
                <img src={footfb} alt="footfb" />
                <img className="ms-4" src={foottwit} alt="foottwit" />
                <img className="ms-4" src={footgoogle} alt="footgoogle" />
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <Row className="mt-lg-0 mt-4">
              <Col md={3} sm={4} xs={6}>
                <div className="text-lg-start text-center">
                  <p className="ff_poppins fw_600 fs_sm clr_white">
                    CUSTOM LINKS
                  </p>
                  <ul className="ps-0 mb-0">
                    <li className="pt-3">
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="pt-3">
                      {" "}
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite"
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
                        className="ff_poppins fw_400 fs_sm clr_lightwhite"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="pt-3">
                      {" "}
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="pt-3">
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite"
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
                        className="ff_poppins fw_400 fs_sm clr_lightwhite"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="pt-3">
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite"
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
                        className="ff_poppins fw_400 fs_sm clr_lightwhite"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="pt-3">
                      <a
                        className="ff_poppins fw_400 fs_sm clr_lightwhite"
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
