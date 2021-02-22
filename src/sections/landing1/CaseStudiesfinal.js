import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/l5/jpg/3.jpg";
import imgC2 from "../../assets/image/l5/jpg/atreatise-02.jpg";
import imgC3 from "../../assets/image/l5/jpg/inthearena-02.jpg";
import imgC4 from "../../assets/image/l5/jpg/02.jpg";
import imgC5 from "../../assets/image/l5/jpg/Ajax-06.jpg";
import imgC6 from "../../assets/image/l5/jpg/Laizurni-06.jpg";
import imgC7 from "../../assets/image/l5/jpg/Toronto-05.jpg";
import imgC8 from "../../assets/image/l5/jpg/bl2.jpg";
import imgC9 from "../../assets/image/l5/jpg/tmw2.jpg";
import imgC10 from "../../assets/image/l5/jpg/vw3.jpg";
import imgC11 from "../../assets/image/l5/jpg/l5-case1.jpg";
import imgC12 from "../../assets/image/l5/jpg/EuroContractor-base.jpg";
import imgC13 from "../../assets/image/l5/jpg/l5-case4.jpg";
import imgC14 from "../../assets/image/l5/jpg/l5-case2.jpg";
import imgC15 from "../../assets/image/l5/jpg/joy.jpg";

const CaseStudiesfinal = () => (
  <>
    {/* <!-- CaseStudies section --> */}
    <div className="case-section pt-15 pb-14 py-lg-25">
      <Container>
        <Row className="justify-content-center">
          <Col xl="6" lg="7" md="8">
            <div className="section-title text-center mb-11 mb-lg-21">
              <h3 className="sub-badge gr-text-12 text-uppercase text-primary mb-7">
                Projects
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
                <Link to="/projects/cityscape/" >
                  <img src={imgC1} alt="web app" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                   Mobile App
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                  Cityscape
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                  <Link to="/projects/atreatiseofmorality/">
                  <img src={imgC2} alt="book cover design" className="w-100 rounded-10" />
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
                <Link to="/projects/inthearena/">
                  <img src={imgC3} alt="" className="w-100 rounded-10" />
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
                <Link to="/projects/themergeI/">
                  <img src={imgC4} alt="book cover design" className="w-100 rounded-10" />
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
                <Link to="/projects/ajaxpickering/">
                  <img src={imgC5} alt="logo branding" className="w-100 rounded-10" />
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
                <Link to="/projects/laizurni/">
                  <img src={imgC6} alt="branding logo" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Branding
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Laizurni
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/torontomobilewelding/">
                  <img src={imgC7} alt="logo branding" className="w-100 rounded-10" />
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
                <Link to="/projects/bigleague/">
                  <img src={imgC8} alt="web design" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Website
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Big League
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
                <Link to="/projects/tmwwebsite/" >
                  <img src={imgC9} alt="toronto website" className="w-100 rounded-10" />
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
                <Link to="/projects/vwkosovo/">
                  <img src={imgC10} alt="VolksWagen Kosovo Website" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Web Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Volkswagen Kosovo
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/45daystohired/">
                  <img src={imgC11} alt="book cover design" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Book Cover Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    45 Days To Hired
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/euro-contractor/">
                  <img src={imgC12} alt="logo contractor branding" className="w-100 rounded-10" />
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
            </div>
          </Col>
         
        </Row>
        <Row className="justify-content-center">
          <Col xs="12">
            <div className="card-columns mb-lg-9">
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/mce-luxurious/">
                  <img src={imgC13} alt="logo branding luxury" className="w-100 rounded-10" />
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
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/airwego/">
                  <img src={imgC14} alt="" className="w-100 rounded-10" />
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
                <Link to="/projects/everyday-joy/">
                  <img src={imgC15} alt="book cover design everyday joy" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Book Cover Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                    Everyday Joy
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
