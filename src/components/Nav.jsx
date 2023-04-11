import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/images/svg/logoimg.svg";
import define from "../assets/images/svg/deifne.svg";

const Nav = () => {
  const [first, setfirst] = useState(true);
  return (
    <section>
      <Container>
        <div className="d-flex justify-content-between align-items-center py-3">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="ms-lg-0 ms-3 me-sm-0 me-3  d-sm-block d-none">
            <img className="w-100" src={define} alt="define" />
          </div>
          <div
            className="burger d-lg-none d-block ms-lg-0 ms-sm-3 "
            onClick={() => {
              setfirst(false);
            }}
          >
            <div className="icon1"></div>
            <div className="icon2"></div>
            <div className="icon3"></div>
          </div>
        </div>
      </Container>
      <nav className="bg_white_shadow py-lg-4">
        <Container>
          <ul
            className={
              first
                ? "hide ps-0 mb-0 d-flex align-itemc-center justify-content-lg-end justify-content-center mobile_ul"
                : "show ps-0 mb-0 d-flex align-itemc-center justify-content-lg-end justify-content-center mobile_ul"
            }
          >
            <div
              className="cross_button"
              onClick={() => {
                setfirst(true);
              }}
            >
              <div className="cross1"></div>
              <div className="cross2"></div>
            </div>
            <li className="ms-3 ">
              <a
                className="ff_roboto fw_400 fs_md clr_black hover_bold"
                href="#"
              >
                HOME
              </a>
            </li>
            <li className="ms-3">
              <a
                className="ff_roboto fw_400 fs_md clr_black hover_bold"
                href="#"
              >
                SNEAKERS KOPEN
              </a>
            </li>
            <li className="ms-3">
              <a
                className="ff_roboto fw_400 fs_md clr_black hover_bold"
                href="#"
              >
                INTERVIEWS
              </a>
            </li>
            <li className="ms-3">
              <a
                className="ff_roboto fw_400 fs_md clr_black hover_bold"
                href="#"
              >
                SALE
              </a>
            </li>
            <li className="ms-3">
              <a
                className="ff_roboto fw_400 fs_md clr_black hover_bold"
                href="#"
              >
                SNEAKER VAN DE DAG
              </a>
            </li>
            <li className="ms-3">
              <a
                className="ff_roboto fw_400 fs_md clr_black hover_bold"
                href="#"
              >
                SNEAKER FORUM
              </a>
            </li>
            <li className="ms-3">
              <a
                className="ff_roboto fw_400 fs_md clr_black hover_bold"
                href="#"
              >
                BLOG
              </a>
            </li>
          </ul>
        </Container>
      </nav>
    </section>
  );
};

export default Nav;
