import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footlock from "../assets/images/svg/footlock.svg";
import sidestep from "../assets/images/svg/sidestep.svg";

const Cards = () => {
  return (
    <section className="mt-5">
      <Container className="pt-4">
        <h1 className="ff_poppins fw_500 fs_2xl color_black">
          You can buy the Nike Air Max 97 Men's Shoe - White here:
        </h1>
        <Row className="mt-5">
          <Col xl={3} lg={4} md={6} className="hover_card">
            <div className="bg_white pb-4 scale">
              <div className="gray_border py-4 px-3">
                <img className="w-100" src={footlock} alt="footlock" />
              </div>
              <div className="d-flex align-items-center justify-content-between mt-4 px-3">
                <div className="d-flex align-items-center">
                  <p className="mb-0 ff_poppins fw_400 fs_md clr_lightestblack">
                    Price:
                  </p>
                  <p className="mb-0 ff_poppins fw_600 fs_lg color_black ps-3">
                    €179,99
                  </p>
                </div>
                <button className="bg_green green_brdr ff_poppins fw_400 fs_xsm clr_white radius_50 px-2 py-1">
                  Best Price
                </button>
              </div>
              <p className="mb-0 ff_poppins fw_400 fs_md clr_lightestblack ps-3">
                Size:
              </p>
              <Row className="mt-2 px-3">
                <Col xs={4}>
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      41
                    </p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      42
                    </p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      43
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-4">
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      44
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-4">
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      45
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-4">
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      46
                    </p>
                  </div>
                </Col>
              </Row>
              <p className="ff_poppins fw_400 fs_xsm clr_drk_green pt-4 ps-3">
                View this product as:
              </p>
              <p className=" ff_poppins fw_600 fs_xsm color_blue ps-3">
                Foot Locker NL
              </p>
            </div>
          </Col>
          <Col xl={3} lg={4} md={6} className="hover_card mt-md-0 mt-4">
            <div className="bg_white pb-4 scale">
              <div className="gray_border py-4 px-3">
                <img className="w-100" src={sidestep} alt="sidestep" />
              </div>
              <div className="d-flex align-items-center justify-content-between mt-4 px-3">
                <div className="d-flex align-items-center">
                  <p className="mb-0 ff_poppins fw_400 fs_md clr_lightestblack">
                    Price:
                  </p>
                  <p className="mb-0 ff_poppins fw_600 fs_lg color_black ps-3">
                    €179,99
                  </p>
                </div>
                <button className="bg_green green_brdr ff_poppins fw_400 fs_xsm clr_white radius_50 px-2 py-1">
                  Best Price
                </button>
              </div>
              <p className="mb-0 ff_poppins fw_400 fs_md clr_lightestblack ps-3">
                Size:
              </p>
              <Row className="mt-2 px-3">
                <Col xs={4}>
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      41
                    </p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      42
                    </p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      43
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-4">
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      44
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-4">
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      45
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-4">
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      46
                    </p>
                  </div>
                </Col>
              </Row>
              <p className="ff_poppins fw_400 fs_xsm clr_drk_green pt-4 ps-3">
                View this product as:
              </p>
              <p className=" ff_poppins fw_600 fs_xsm color_blue ps-3">
                Foot Locker NL
              </p>
            </div>
          </Col>
          <Col xl={3} lg={4} md={6} className="hover_card mt-lg-0 mt-4">
            <div className="bg_white pb-4 scale">
              <div className="gray_border py-4 px-3">
                <img className="w-100" src={footlock} alt="footlock" />
              </div>
              <div className="d-flex align-items-center justify-content-between mt-4 px-3">
                <div className="d-flex align-items-center">
                  <p className="mb-0 ff_poppins fw_400 fs_md clr_lightestblack">
                    Price:
                  </p>
                  <p className="mb-0 ff_poppins fw_600 fs_lg color_black ps-3">
                    €179,99
                  </p>
                </div>
                <button className="bg_green green_brdr ff_poppins fw_400 fs_xsm clr_white radius_50 px-2 py-1">
                  Best Price
                </button>
              </div>
              <p className="mb-0 ff_poppins fw_400 fs_md clr_lightestblack ps-3">
                Size:
              </p>
              <Row className="mt-2 px-3">
                <Col xs={4}>
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      41
                    </p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      42
                    </p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      43
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-4">
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      44
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-4">
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      45
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-4">
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      46
                    </p>
                  </div>
                </Col>
              </Row>
              <p className="ff_poppins fw_400 fs_xsm clr_drk_green pt-4 ps-3">
                View this product as:
              </p>
              <p className=" ff_poppins fw_600 fs_xsm color_blue ps-3">
                Foot Locker NL
              </p>
            </div>
          </Col>
          <Col xl={3} lg={4} md={6} className="hover_card mt-xl-0 mt-4">
            <div className="bg_white pb-4 scale">
              <div className="gray_border py-4 px-3">
                <img className="w-100" src={sidestep} alt="footlock" />
              </div>
              <div className="d-flex align-items-center justify-content-between mt-4 px-3">
                <div className="d-flex align-items-center">
                  <p className="mb-0 ff_poppins fw_400 fs_md clr_lightestblack">
                    Price:
                  </p>
                  <p className="mb-0 ff_poppins fw_600 fs_lg color_black ps-3">
                    €179,99
                  </p>
                </div>
                <button className="bg_green green_brdr ff_poppins fw_400 fs_xsm clr_white radius_50 px-2 py-1">
                  Best Price
                </button>
              </div>
              <p className="mb-0 ff_poppins fw_400 fs_md clr_lightestblack ps-3">
                Size:
              </p>
              <Row className="mt-2 px-3">
                <Col xs={4}>
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      41
                    </p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      42
                    </p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      43
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-4">
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      44
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-4">
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      45
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-4">
                  <div className="gray_border2 radius_50">
                    <p className="ff_poppins fw_500 fs_xsm color_black mb-0 text-center py-2">
                      46
                    </p>
                  </div>
                </Col>
              </Row>
              <p className="ff_poppins fw_400 fs_xsm clr_drk_green pt-4 ps-3">
                View this product as:
              </p>
              <p className=" ff_poppins fw_600 fs_xsm color_blue ps-3">
                Foot Locker NL
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cards;
