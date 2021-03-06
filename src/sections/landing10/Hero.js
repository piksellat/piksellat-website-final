import React, { useContext } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import imgH from "../../assets/image/l3/png/l3-hero-img.png";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="position-relative bg-pattern pattern-2 pt-24 pt-md-15 pt-lg-13 pt-xl-25">
        <Container>
          <Row className="justify-content-sm-end align-items-center">
            <Col
              lg="6"
              md="8"
              className="py-md-16 py-lg-21"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content pr-xl-19 mb-9 mb-md-0">
                <h1 className="title gr-text-3 mb-6">
                  Pixel Perfect<br/>
                  Design Solutions
                </h1>
                <h5>
                Detail-oriented to
                the smallest
                <strong className="gr-text-7 mb-8 font-weight-normal" > pixel</strong>
                </h5>
                <p className="gr-text-8 mb-8">
                  We started our journey 10 years ago and we pledge to offer the best design solutions for your <em>business</em>.
                </p>
                <div className="hero-btn mb-8 ">
                  <Button className="gr-hover-y">Learn more</Button>
                </div>
                <a
                  href="/#"
                  className="video-link gr-text-color"
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleVideoModal();
                  }}
                >
                  <span className="d-inline-flex mr-2 gr-text-color">
                    <i className="far fa-play-circle gr-text-9"></i>
                  </span>
                  <span className="gr-text-12 font-weight-bold text-uppercase">
                    Watch how we can help
                  </span>
                </a>
              </div>
            </Col>
            <Col lg="5" md="4" sm="7" className="offset-lg-1 align-self-sm-end">
              <div
                className="hero-img"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <img className="w-100" src={imgH} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
