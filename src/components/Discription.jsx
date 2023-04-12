import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Discription = () => {
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);
  return (
    <section className="mt-5">
      <Container className="pt-4">
        <div className="width_50 d-flex justify-content-between w_lg_100 over_scrol max_450 example">
          {/* <h1 className="ff_poppins fw_400 fs_lg color_black red_font_hover befor _line ">
            DESCRIPTION
          </h1> */}
          <p
            onClick={() => {
              setfirst(0);
              setsecond(0);
            }}
            className={
              first === 0
                ? " red_font ff_poppins fw_400 fs_lg clr_black red_font_hover befor _line curser_pointer max_94"
                : "black_font ff_poppins fw_400 fs_lg clr_black red_font_hover befor _line curser_pointer max_94"
            }
          >
            DESCRIPTION
          </p>
          <p
            onClick={() => {
              setfirst(1);
              setsecond(1);
            }}
            className={
              first === 1
                ? " red_font ff_poppins fw_400 fs_lg clr_black red_font_hover befor _line curser_pointer max_191 ms-sm-0 ms-4"
                : "black_font ff_poppins fw_400 fs_lg clr_black red_font_hover befor _line curser_pointer max_191 ms-sm-0 ms-4"
            }
          >
            ADDITIONAL INFORMATION
          </p>
          <p
            onClick={() => {
              setfirst(2);
              setsecond(2);
            }}
            className={
              first === 2
                ? "red_font ff_poppins fw_400 fs_lg clr_black red_font_hover befor_line curser_pointer max_86 ms-sm-0 ms-4 "
                : " black_font ff_poppins fw_400 fs_lg clr_black red_font_hover befor _line curser_pointer max_86 ms-sm-0 ms-4 "
            }
          >
            REVIEWS (1)
          </p>
        </div>
        <div>
          {" "}
          <p
            className={
              second === 0
                ? "ff_poppins fw_400 fs_lg clr_lightblack pt-4 line_height d-block"
                : "ff_poppins fw_400 fs_lg clr_lightblack pt-4 line_height d-none"
            }
          >
            Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
            euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
            in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
            mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec
            massa in ligula vestibulum mattis. Suspendisse imperdiet lorem
            eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor
            vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non
            pharetra mi. Cura{" "}
          </p>{" "}
          <p
            className={
              second === 1
                ? "ff_poppins fw_400 fs_lg clr_lightblack pt-4 line_height d-block"
                : "ff_poppins fw_400 fs_lg clr_lightblack pt-4 line_height d-none"
            }
          >
            Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
            euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
            in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
            matti
          </p>
          <p
            className={
              second === 2
                ? "ff_poppins fw_400 fs_lg clr_lightblack pt-4 line_height d-block"
                : "ff_poppins fw_400 fs_lg clr_lightblack pt-4 line_height d-none"
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, saepe.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Discription;
