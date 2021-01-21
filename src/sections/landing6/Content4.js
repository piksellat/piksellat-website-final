import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import imgHero from "../../assets/image/l4/webp/2-layers.webp";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section bg-default-2 pt-lg-13 pb-13 pb-lg-21">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              sm="10"
              lg="6"
              className="offset-xl-1  order-lg-2 mb-9 mb-lg-0"
            >
              <div
                className="double-image-group-opacity"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img className="main-img w-100" src={imgHero} alt="" />
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h2 className="gr-text-4 mb-7">
                Performance Marketing
                </h2>
                <p className="gr-text-8 mb-0">
                With a keen understanding of what's happening in the digital landscape, we leverage the power of marketing platforms to connect audiences with contagious content worth sharing & spreading, cross-channel and touchpoint.
                </p>
                <p className="gr-text-11 mb-0 mt-5 font-weight-light">
                <ul>
                  <li>Growth Strategy</li>
                  <li>Social Media Marketing</li>
                  <li>PPC Campaigns</li>
                  <li>Launch Strategies</li>
                </ul>
                </p>
                <Link
                  to="/projects"
                  className="btn-link with-icon gr  -text-blue gr-text-7 mt-5"
                >
                  Performance Projects{" "}
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
