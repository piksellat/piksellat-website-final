import React, { useContext } from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import imgHero from "../../assets/image/l4/png/2021-02-17_23-19.png";
import imgShape from "../../assets/image/l4/png/l4-hero-shape.png";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="hero-area position-relative bg-blackish-blue pt-29 pt-lg-33 pb-15 pb-lg-29">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="6" md="9" className="order-lg-2">
              <div
                className="hero-img"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <div className="hero-video-thumb position-relative gr-z-index-1">
                  <img src={imgHero} alt="" className="w-100 rounded-8" />
                  <a
                    className="video-play-trigger gr-abs-center bg-white circle-xl gr-flex-all-center gr-abs-hover-y focus-reset"
                    href="#/"
                    onClick={(e) => {
                      e.preventDefault();
                      gContext.toggleVideoModal();
                    }}
                    tabIndex="-1"
                  >
                    <i className="icon icon-triangle-right-17-2"></i>
                  </a>
                  <div className="abs-shape gr-abs-tr-custom gr-z-index-n1">
                    <img
                      src={imgShape}
                      alt=""
                      className="w-100"
                      data-aos="zoom-in"
                      data-aos-delay="750"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg="6"
              md="9"
              className="order-lg-1 mt-9 mt-lg-0"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="hero-content dark-mode-texts">
                <h1 className="gr-text-2 mb-9">
                  Pixel Perfect <br />
                  Design Solutions.
                </h1>
                <p className="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9">
                  We started our journey 10 years ago and we pledge to offer the best design solutions for your business.
                </p>
                <div className="hero-btn">
                  <Link
                    to="/contact2"
                    className="btn-link with-icon text-primary gr-text-7 font-weight-bold"
                  >
                    Get in touch{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
