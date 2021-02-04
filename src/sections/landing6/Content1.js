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
              <h3 className="sub-badge gr-text-12 text-uppercase text-primary mb-7">
                Services
              </h3>
              <h2 className="title gr-text-4 mb-0">
              We offer a great variety of design services, such as:
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
                Brand Identity is who you are as a business or organization, and that statement needs to be strong and clear, resonating throughout all aspects of your business decisions. Whether you’re launching a new brand, or in need of a fresh update, we create a defined awareness between you and your consumer, for a lasting impression.
                </p>
                <p className="gr-text-11 mb-0 mt-5 font-weight-light">
                <ul>
                  <li>Brand Strategy & Experience</li>
                  <li>Guidelines & Systems</li>
                  <li>Content Strategy</li>
                  <li>Identity Design</li>
                </ul>
                </p>
                <Link
                  to="/projects"
                  className="btn-link with-icon gr-text-blue gr-text-7 mt-5"
                >
                  Branding Projects{" "}
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
