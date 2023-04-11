import React from "react";
import { Container } from "react-bootstrap";

const Discription = () => {
  return (
    <section className="mt-5">
      <Container className="pt-4">
        <div className="width_50 d-flex justify-content-between w_lg_100">
          {/* <h1 className="ff_poppins fw_400 fs_lg color_black red_font_hover befor _line ">
            DESCRIPTION
          </h1> */}
          <a
            href="#"
            className="ff_poppins fw_400 fs_lg clr_black red_font_hover befor _line"
          >
            DESCRIPTION
          </a>
          <a
            href="#"
            className="ff_poppins fw_400 fs_lg clr_black red_font_hover"
          >
            ADDITIONAL INFORMATION
          </a>
          <a
            href="#"
            className="ff_poppins fw_400 fs_lg clr_black red_font_hover"
          >
            REVIEWS (1)
          </a>
        </div>
        <p className="ff_poppins fw_400 fs_lg clr_lightblack pt-4 line_height">
          Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
          euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in
          leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis
          finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in
          ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi
          euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit.
          Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura{" "}
        </p>
      </Container>
    </section>
  );
};

export default Discription;
