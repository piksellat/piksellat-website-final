import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import imgHero from "../../assets/image/l4/png/ecommerce.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section bg-default-2 pt-lg-15 pb-13 pb-lg-24">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" lg="7">
            <div
                className="double-image-group-opacity"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img className="main-img w-100" src={imgHero} alt="" />
              </div>
            </Col>
            <Col sm="10" lg="5" className="col-sm-10 col-lg-5">
              <div className="content-text pl-xl-7">
                <h2 className="gr-text-4 mb-7">
                eCommerce Experiences                  
                </h2>
                <p className="gr-text-8 mb-0">
                eCommerce is all about experience, and we craft and co-create experiences that are both purposeful and equally profitable. Digital brand building through eCommerce channels fuels business growth and the bottom-line.
                </p>
                <p className="gr-text-11 mb-0 mt-5 font-weight-light">
                <ul>
                  <li>Design Direction</li>
                  <li>Industry & Consumer Research</li>
                  <li>eCommerce Platforms</li>
                  <li>Rapid Prototyping</li>
                </ul>
                </p>
                <Link
                  to="/#"
                  className="btn-link with-icon gr-text-blue gr-text-7  mt-9"
                >
                  eCommerce Projects{" "}
                  <i className="icon icon-tail-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;