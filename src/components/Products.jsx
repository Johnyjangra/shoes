import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import redshoecard from "../assets/images/svg/redshoecard.svg";
import grayshoecard from "../assets/images/svg/grayshoecard.svg";
import offlable from "../assets/images/svg/offlable.svg";
import trolly from "../assets/images/svg/trolly.svg";
import blackstart from "../assets/images/svg/blackstart.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Products = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="mt-5">
      <Container className="pt-4">
        <h1 className="ff_poppins fw_600 fs_3xl clr_black">RELATED PRODUCT</h1>

        <Row className="mt-5">
          <Col xl={3} lg={4} md={4} sm={6}>
            <div className="card_bg pb-3">
              <div className="position-relative">
                <img className="w-100" src={redshoecard} alt="redshoecard" />
                <div className="position-absolute top_14 left_14">
                  <img src={offlable} alt="offlable" />
                </div>
                <div className="lable_bg position-absolute h_29 w_68 d-flex flex-column justify-content-center align-items-center top_0 right_0">
                  <p className="ff_poppins fw_400 fs_xsm clr_white mb-0 ">
                    NEW
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between px-2 pt-3">
                <div>
                  <p className="ff_poppins fw_500 fs_lg clr_lightblack">
                    Quickiins Mens Shoes
                  </p>
                  <div className="d-flex align-items-center">
                    <p className="ff_poppins fw_500 fs_lg clr_lightestwhite">
                      $90.00
                    </p>
                    <p className="ff_poppins fw_500 fs_lg color_lightred ps-4">
                      $70.00
                    </p>
                  </div>
                </div>
                <div>
                  <img src={trolly} alt="trolly" />
                </div>
              </div>
              <div className="ps-2">
                <img src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} md={4} sm={6} className="mt-sm-0 mt-4">
            <div className="card_bg pb-3">
              <div className="position-relative">
                <img className="w-100" src={grayshoecard} alt="grayshoecard" />
                <div className="position-absolute top_14 left_14">
                  <img src={offlable} alt="offlable" />
                </div>
                <div className="lable_bg position-absolute h_29 w_68 d-flex flex-column justify-content-center align-items-center top_0 right_0">
                  <p className="ff_poppins fw_400 fs_xsm clr_white mb-0 ">
                    NEW
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between px-2 pt-3">
                <div>
                  <p className="ff_poppins fw_500 fs_lg clr_lightblack">
                    Quickiins Mens Shoes
                  </p>
                  <div className="d-flex align-items-center">
                    <p className="ff_poppins fw_500 fs_lg clr_lightestwhite">
                      $90.00
                    </p>
                    <p className="ff_poppins fw_500 fs_lg color_lightred ps-4">
                      $70.00
                    </p>
                  </div>
                </div>
                <div>
                  <img src={trolly} alt="trolly" />
                </div>
              </div>
              <div className="ps-2">
                <img src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} md={4} sm={6} className="mt-md-0 mt-4">
            <div className="card_bg pb-3">
              <div className="position-relative">
                <img className="w-100" src={redshoecard} alt="redshoecard" />
                <div className="position-absolute top_14 left_14">
                  <img src={offlable} alt="offlable" />
                </div>
                <div className="lable_bg position-absolute h_29 w_68 d-flex flex-column justify-content-center align-items-center top_0 right_0">
                  <p className="ff_poppins fw_400 fs_xsm clr_white mb-0 ">
                    NEW
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between px-2 pt-3">
                <div>
                  <p className="ff_poppins fw_500 fs_lg clr_lightblack">
                    Quickiins Mens Shoes
                  </p>
                  <div className="d-flex align-items-center">
                    <p className="ff_poppins fw_500 fs_lg clr_lightestwhite">
                      $90.00
                    </p>
                    <p className="ff_poppins fw_500 fs_lg color_lightred ps-4">
                      $70.00
                    </p>
                  </div>
                </div>
                <div>
                  <img src={trolly} alt="trolly" />
                </div>
              </div>
              <div className="ps-2">
                <img src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} md={4} sm={6} className="mt-xl-0 mt-4">
            <div className="card_bg pb-3">
              <div className="position-relative">
                <img className="w-100" src={grayshoecard} alt="grayshoecard" />
                <div className="position-absolute top_14 left_14">
                  <img src={offlable} alt="offlable" />
                </div>
                <div className="lable_bg position-absolute h_29 w_68 d-flex flex-column justify-content-center align-items-center top_0 right_0">
                  <p className="ff_poppins fw_400 fs_xsm clr_white mb-0 ">
                    NEW
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between px-2 pt-3">
                <div>
                  <p className="ff_poppins fw_500 fs_lg clr_lightblack">
                    Quickiins Mens Shoes
                  </p>
                  <div className="d-flex align-items-center">
                    <p className="ff_poppins fw_500 fs_lg clr_lightestwhite">
                      $90.00
                    </p>
                    <p className="ff_poppins fw_500 fs_lg color_lightred ps-4">
                      $70.00
                    </p>
                  </div>
                </div>
                <div>
                  <img src={trolly} alt="trolly" />
                </div>
              </div>
              <div className="ps-2">
                <img src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} md={4} sm={6} className="mt-4">
            <div className="card_bg pb-3">
              <div className="position-relative">
                <img className="w-100" src={redshoecard} alt="redshoecard" />
                <div className="position-absolute top_14 left_14">
                  <img src={offlable} alt="offlable" />
                </div>
                <div className="lable_bg position-absolute h_29 w_68 d-flex flex-column justify-content-center align-items-center top_0 right_0">
                  <p className="ff_poppins fw_400 fs_xsm clr_white mb-0 ">
                    NEW
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between px-2 pt-3">
                <div>
                  <p className="ff_poppins fw_500 fs_lg clr_lightblack">
                    Quickiins Mens Shoes
                  </p>
                  <div className="d-flex align-items-center">
                    <p className="ff_poppins fw_500 fs_lg clr_lightestwhite">
                      $90.00
                    </p>
                    <p className="ff_poppins fw_500 fs_lg color_lightred ps-4">
                      $70.00
                    </p>
                  </div>
                </div>
                <div>
                  <img src={trolly} alt="trolly" />
                </div>
              </div>
              <div className="ps-2">
                <img src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} md={4} sm={6} className="mt-4">
            <div className="card_bg pb-3">
              <div className="position-relative">
                <img className="w-100" src={grayshoecard} alt="grayshoecard" />
                <div className="position-absolute top_14 left_14">
                  <img src={offlable} alt="offlable" />
                </div>
                <div className="lable_bg position-absolute h_29 w_68 d-flex flex-column justify-content-center align-items-center top_0 right_0">
                  <p className="ff_poppins fw_400 fs_xsm clr_white mb-0 ">
                    NEW
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between px-2 pt-3">
                <div>
                  <p className="ff_poppins fw_500 fs_lg clr_lightblack">
                    Quickiins Mens Shoes
                  </p>
                  <div className="d-flex align-items-center">
                    <p className="ff_poppins fw_500 fs_lg clr_lightestwhite">
                      $90.00
                    </p>
                    <p className="ff_poppins fw_500 fs_lg color_lightred ps-4">
                      $70.00
                    </p>
                  </div>
                </div>
                <div>
                  <img src={trolly} alt="trolly" />
                </div>
              </div>
              <div className="ps-2">
                <img src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} md={4} sm={6} className="mt-4">
            <div className="card_bg pb-3">
              <div className="position-relative">
                <img className="w-100" src={redshoecard} alt="redshoecard" />
                <div className="position-absolute top_14 left_14">
                  <img src={offlable} alt="offlable" />
                </div>
                <div className="lable_bg position-absolute h_29 w_68 d-flex flex-column justify-content-center align-items-center top_0 right_0">
                  <p className="ff_poppins fw_400 fs_xsm clr_white mb-0 ">
                    NEW
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between px-2 pt-3">
                <div>
                  <p className="ff_poppins fw_500 fs_lg clr_lightblack">
                    Quickiins Mens Shoes
                  </p>
                  <div className="d-flex align-items-center">
                    <p className="ff_poppins fw_500 fs_lg clr_lightestwhite">
                      $90.00
                    </p>
                    <p className="ff_poppins fw_500 fs_lg color_lightred ps-4">
                      $70.00
                    </p>
                  </div>
                </div>
                <div>
                  <img src={trolly} alt="trolly" />
                </div>
              </div>
              <div className="ps-2">
                <img src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} md={4} sm={6} className="mt-4">
            <div className="card_bg pb-3">
              <div className="position-relative">
                <img className="w-100" src={grayshoecard} alt="grayshoecard" />
                <div className="position-absolute top_14 left_14">
                  <img src={offlable} alt="offlable" />
                </div>
                <div className="lable_bg position-absolute h_29 w_68 d-flex flex-column justify-content-center align-items-center top_0 right_0">
                  <p className="ff_poppins fw_400 fs_xsm clr_white mb-0 ">
                    NEW
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between px-2 pt-3">
                <div>
                  <p className="ff_poppins fw_500 fs_lg clr_lightblack">
                    Quickiins Mens Shoes
                  </p>
                  <div className="d-flex align-items-center">
                    <p className="ff_poppins fw_500 fs_lg clr_lightestwhite">
                      $90.00
                    </p>
                    <p className="ff_poppins fw_500 fs_lg color_lightred ps-4">
                      $70.00
                    </p>
                  </div>
                </div>
                <div>
                  <img src={trolly} alt="trolly" />
                </div>
              </div>
              <div className="ps-2">
                <img src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
                <img className="ms-1" src={blackstart} alt="blackstart" />
              </div>
            </div>
          </Col>
        </Row>

        <div className="d-flex align-items-center justify-content-end mt-4">
          <div className="btn1 btv_red_hovr">
            <p className="ff_poppins fw_600 fs_xl clr_black mb-0 d-flex flex-column align-items-center justify-content-center h-100 hover_clr_white">
              1
            </p>
          </div>
          <div className="btn1 ms-4 btv_red_hovr">
            <p className="ff_poppins fw_600 fs_xl clr_black mb-0 d-flex flex-column align-items-center justify-content-center h-100 hover_clr_white">
              2
            </p>
          </div>
          <div className="btn1 ms-4 btv_red_hovr">
            <p className="ff_poppins fw_600 fs_xl clr_black mb-0 d-flex flex-column align-items-center justify-content-center h-100 hover_clr_white">
              3
            </p>
          </div>
          <div className="next_btn py-2 px-3  ms-4">
            <p className=" mb-0 d-flex flex-column align-items-center justify-content-center h-100">
              <a className="ff_poppins fw_400 fs_xsm clr_lightestgrey" href="#">
                Next
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
