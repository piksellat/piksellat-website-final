import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgB1 from "../../assets/image/l4/png/banaku.png";
import imgB2 from "../../assets/image/l4/png/incodeks.png";
import imgB3 from "../../assets/image/l4/png/bidatalab.png";
import imgB4 from "../../assets/image/l4/png/l4-brand4.png";
import imgB5 from "../../assets/image/l4/png/l4-brand6.png";

const Brands = () => {
  return (
    <>
      {/* <!-- Brands Area --> */}
      <div className="brand-section pt-13 pt-lg-0 pb-11 border-bottom bg-default-4">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs="12">
              <div className="brand-logos d-flex justify-content-center justify-content-xl-between align-items-center mx-n9 flex-wrap">
                <div
                  className="single-brand mx-9 py-6 gr-opacity-8 gr-hover-opacity-full"
                  data-aos="zoom-in-right"
                  data-aos-duration="500"
                >
                  <img src={imgB1} alt="" className="w-100" />
                </div>
                <div
                  className="single-brand mx-9 py-6 gr-opacity-8 gr-hover-opacity-full"
                  data-aos="zoom-in-right"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  <img src={imgB2} alt="" className="w-100" />
                </div>
                <div
                  className="single-brand mx-9 py-6 gr-opacity-8 gr-hover-opacity-full"
                  data-aos="zoom-in-right"
                  data-aos-duration="500"
                  data-aos-delay="400"
                >
                  <img src={imgB3} alt="" className="w-100" />
                </div>
                
               
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Brands;
