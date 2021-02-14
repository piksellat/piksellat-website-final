import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/l5/jpg/l5-case1.jpg";
import imgC2 from "../../assets/image/l5/jpg/l5-case2.jpg";
import imgC3 from "../../assets/image/l5/jpg/l5-case3.jpg";
import imgC4 from "../../assets/image/l5/jpg/l5-case4.jpg";
import imgC5 from "../../assets/image/l5/jpg/EuroContractor-base.jpg";
import imgC6 from "../../assets/image/l5/jpg/Ajax-05.jpg";
import imgC7 from "../../assets/image/l5/jpg/Laizurni2.jpg";
import imgC8 from "../../assets/image/l5/jpg/EverydayJoy1-scaled-uai-2064x1528.jpg";
import imgC9 from "../../assets/image/l5/jpg/01.jpg";
import imgC10 from "../../assets/image/l5/jpg/bl2.jpg";
import imgC11 from "../../assets/image/l5/jpg/01arena.jpg";
import imgC12 from "../../assets/image/l5/jpg/02.jpg";
import imgC13 from "../../assets/image/l5/jpg/tmw1.jpg";
import imgC14 from "../../assets/image/l5/jpg/Toronto-06.jpg";
import imgC15 from "../../assets/image/l5/jpg/vw2.jpg";

const CaseStudiesfinal = () => (
  <>
    {/* <!-- CaseStudies section --> */}
    <div className="case-section pt-15 pb-14 py-lg-25">
      <Container>
        <Row className="justify-content-center">
          <Col xl="6" lg="7" md="8">
            <div className="section-title text-center mb-11 mb-lg-21">
              <h3 className="sub-badge gr-text-12 text-uppercase text-primary mb-7">
                Case studies
              </h3>
              <h2 className="title gr-text-4 mb-0">
                Our works describe why we are the best in the business
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12">
            <div className="card-columns mb-lg-9">
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/45daystohired" target="_blank">
                  <img src={imgC1} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Graphic Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                  45 Days to Hired
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                  <Link to="/projects/airwego" target="_blank">
                  <img src={imgC2} alt="" className="w-100 rounded-10" />
                 </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Branding, Web Design & Development
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    AirWeGo
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/cityscape" target="_blank">
                  <img src={imgC3} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Web Development
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Cityscape
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/mce-luxurious" target="_blank">
                  <img src={imgC4} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Graphic Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    MCE Luxurious
                  </h3>
                </div>
              </div>
            </div>
          </Col>
         
        </Row>
        <Row className="justify-content-center">
          <Col xs="12">
            <div className="card-columns mb-lg-9">
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/euro-contractor/" target="_blank">
                  <img src={imgC5} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Graphic Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Euro Contractor
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/ajaxpickering/" target="_blank">
                  <img src={imgC6} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Branding
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Ajax Pickering
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/laizurni" target="_blank">
                  <img src={imgC7} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Graphic Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Laizurni
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/everyday-joy" target="_blank">
                  <img src={imgC8} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Print Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Everyday Joy
                  </h3>
                </div>
              </div>
            </div>
          </Col>
         
        </Row>
        <Row className="justify-content-center">
          <Col xs="12">
            <div className="card-columns mb-lg-9">
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/atreatiseofmorality/" target="_blank">
                  <img src={imgC9} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Book Cover Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    A Treatise of Morality
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/bigleague/" target="_blank">
                  <img src={imgC10} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Book Cover Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Big League
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/inthearena/" target="_blank">
                  <img src={imgC11} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Book Cover Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    In The Arena
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/themergeI/" target="_blank">
                  <img src={imgC12} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Book Cover Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    The Merge I
                  </h3>
                </div>
              </div>
            </div>
          </Col>
         
        </Row>
        <Row className="justify-content-center">
          <Col xs="12">
            <div className="card-columns mb-lg-9">
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/tmwwebsite/" target="_blank">
                  <img src={imgC13} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Web Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Toronto Mobile Welding Website
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/torontomobilewelding/" target="_blank">
                  <img src={imgC14} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Logo
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Toronto Mobile Welding
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/inthearena/" target="_blank">
                  <img src={imgC15} alt="" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Website
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Volkswagen Kosovo
                  </h3>
                </div>
              </div>
              </div>
          </Col>
         
        </Row>
        
      </Container>
    </div>
  </>
);

export default CaseStudiesfinal;
