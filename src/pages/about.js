import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import imgBanner from "../assets/image/inner/about-banner.png";
import imgC1 from "../assets/image/inner/about-content-1.png";
import imgC2 from "../assets/image/inner/about-content-2.png";
import imgC3 from "../assets/image/inner/about-content-3.png";
import imgC4 from "../assets/image/inner/about-content-4.png";
import imgT1 from "../assets/image/inner/team-image-1.png";
import imgT2 from "../assets/image/inner/team-image-2.png";
import imgT3 from "../assets/image/inner/team-image-3.png";
import imgT4 from "../assets/image/inner/team-image-4.png";
import imgT5 from "../assets/image/inner/team-image-5.png";
import imgT6 from "../assets/image/inner/team-image-6.png";
import imgT7 from "../assets/image/inner/team-image-7.png";

const AboutPage = () => {
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
            <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29">
              <Col lg="9" xl="8">
                <div className="px-md-12 text-center mb-11 mb-lg-14">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">We are Piksellat!</h2>
                  <p className="gr-text-8 mb-0">
                  Our studio is a homely and fun space. Our expert team is made up of creatives with technical know-how,
                  designers who think outside the box, and developers who push innovation.
                  </p>
                </div>
              </Col>
              <Col xs="12">
                <div className="banner-fluid-image pt-lg-9">
                  <img src={imgBanner} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">
                    Beliefs, Mission & Process
                  </h2>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <p className="gr-text-8 mb-7 mb-lg-10">
                  We believe that great design solutions are first a product of intense research and being able to analyze complex subjects and see the ‘big picture’.

This allows us to zoom in, see & create the smaller design blocks.
{" "}
                  </p>
                  <p className="gr-text-8 mb-0">
                  For us, it's highly important to approach projects with wide-eyes and open-mind, to discover potential in unexpected places and craft memorable experiences.
During our conversations with our clients we like to stick to what matters while also being relaxed enough to make doing business with us fun. 

                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pt-13 pt-lg-24 pb-lg-24 ">
          <Container>
            <Row className="justify-content-center">
              <Col lg="9" xl="8">
                <div className="section-title text-center px-md-12 mb-lg-17 mb-10">
                  <h2 className="gr-text-3 mb-7 mb-lg-8">Meet our team</h2>
                  <p className="gr-text-8 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next consultancy website within
                    few minutes.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-left mb-lg-n15 mb-0">
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT1} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Armend Meha</h3>
                    <p className="gr-text-9 mb-0 line-height-1">Co-founder & Creative Director</p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT2} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Irfan Rreba</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Co-founder & Marketing Strategist
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT3} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Endrit Hyseni</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Content Manager
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT4} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Egzon Salihu</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Lead Video Editor
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT3} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Egzon Salihu</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Lead Video Editor
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="3"
                md="4"
                xs="6"
                className="mb-13 d-flex align-items-center"
              >
                <div className="mt-xs-n25">
                  <h3 className="gr-text-6">
                    Interested to join <br />
                    our team?
                  </h3>
                  <a
                    href="/contact"
                    className="btn-link with-icon gr-text-blue gr-text-7 font-weight-bold mt-5"
                  >
                    Apply now{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default AboutPage;
