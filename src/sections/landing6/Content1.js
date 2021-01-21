import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import imgHero from "../../assets/image/l4/png/l4-content-img.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section bg-default-2 pt-lg-15 pb-13 pb-lg-24">
        <Container>
        <Row className="justify-content-center">
          <Col xl="6" lg="7" md="8">
            <div className="section-title text-center mb-11 mb-lg-21">
              <h3 className="sub-badge gr-text-12 text-uppercase text-red mb-7">
                Services
              </h3>
              <h2 className="title gr-text-4 mb-0">
                We offer a great variery of "fuck yes" services
              </h2>
            </div>
          </Col>
        </Row>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" lg="7">
              <div
                className="content-img pr-9"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img
                  src={imgHero}
                  alt=""
                  className="gr-image-box-shadow mw-100"
                />
              </div>
            </Col>
            <Col sm="10" lg="5">
              <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                <h2 className="gr-text-4 mb-7">
                  Kick-ass <br className="d-none d-lg-block" />
                  brand identities.
                </h2>
                <p className="gr-text-8 mb-0">
                  We share common trends and strategies for improving your
                  rental income and making sure you stay in high demand.
                </p>
                <Link
                  to="/#"
                  className="btn-link with-icon gr-text-blue gr-text-7 mt-9"
                >
                  See our works{" "}
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
