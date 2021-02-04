import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import { Link } from "gatsby";
import imgBanner from "../../assets/image/portofoliopiece/laizurni/headset-case-1.svg";
import imgC1 from "../../assets/image/portofoliopiece/45daystohired/45Days2-scaled-uai-2064x1378.jpg";
import imgC2 from "../../assets/image/portofoliopiece/laizurni/Laizurni2.jpg";



const PortofolioPiece = () => {
  return (
    <>
      <PageWrapper
       headerConfig={{
        theme: "light",
        align: "right",
        button: "cta", // cta, account, null
        buttonText: "Get a free consultation",
      }}
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
           <div className="inner-banner">
          <Container>
            <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29 no-padding">
              <Col lg="9" xl="8">
                <div className="px-md-12 text-center mb-11 mb-lg-14">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">45 Days to Hired</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="d-flex bg-blue pt-lg-28 pt-13 pb-13 pb-lg-25">
          <Container >
            <Row  className="justify-content-between">
              <Col lg="7" className="mb-7 mb-lg-7">
              <div className="pr-xl-13">
                  <h2 className="gr-text-12 mb-2 text-primary">
                    OVERVIEW
                  </h2>
                </div>
                <div className="pr-xl-13">
                  <h2 className="gr-text-6 font-weight-normal text-white mb-0">
                  This piece is typography-based and uses the Rockwell font family. With legibility in mind, the cover pops as a thumbnail and also grabs the attention from the use of high contrast color combination. 🟨
                  </h2>
                </div>
              </Col>
              <Col lg="3" classname="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-12 mb-2 text-primary">
                  DELIVERABLES{" "}
                  </h2>
                    <ul className="gr-text-12 list-unstyled list-group mb-0 text-primary font-weight-light">
                      <li>Book Cover Design</li>
                    </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="inner-banner">
          <Container>
            <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29 no-padding">
              <Col lg="9" xl="8">
                <div className="px-md-12 text-center mb-11 mb-lg-14">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">45 Days to Hired</h2>
                </div>
              </Col>
              <Col xs="12">
                <div className="banner-fluid-image pt-lg-9 ml-0 mr-0">
                  <img src={imgC1} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="content-section pt-14 pt-lg-27 pb-13 pb-lg-27 bg-default-2">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col sm="8" lg="5" xl="6" className="mb-9 mb-lg-0">
                <div className="content-grid-image-group d-flex  mx-sm-n3">
                  <div className="single-image d-flex flex-column px-3 px-sm-6">
                    <img
                      src={imgC1}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />
                    <img
                      src={imgC1}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="800"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />
                  </div>
                  <div className="single-image d-flex flex-column pt-11 px-3 px-sm-6">
                    <img
                      src={imgC1}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="400"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />
                    <img
                      src={imgC2}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="1200"
                      className="w-100 rounded-10"
                    />
                  </div>
                </div>
              </Col>
              <Col
                sm="8"
                lg="6"
                xl="5"
                className="offset-lg-1 offset-lg-1 offset-xl-0"
              >
                <div className="content-text">
                  <h2 className="gr-text-3 mb-7 mb-lg-11">
                    High skilled coders <br className="d-none d-lg-block" />{" "}
                    from worldwide.
                  </h2>
                  <p className="gr-text-8 mb-7 mb-lg-10">
                    We share common trends and strategies for improving your
                    rental income and making sure you stay in high demand of
                    service.{" "}
                  </p>
                  <p className="gr-text-8 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. With lots of
                    unique blocks, you can easily build a page without coding
                    any other page.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Row className="align-items-center justify-content-center">
        <Link
          to="/projects"
          className="btn-link with-icon mb-0 gr-text-7 font-weight-normal mb-7 mt-7 mb-lg-10 ">
          Back to all projects
          <i className="icon-tail-left icon  "></i>
          </Link>
        </Row>  
      </PageWrapper>
    </>
  );
};
export default PortofolioPiece;
