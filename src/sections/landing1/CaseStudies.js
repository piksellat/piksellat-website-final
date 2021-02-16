import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/l5/jpg/3.jpg";
import imgC4 from "../../assets/image/l5/jpg/02.jpg";
import imgC7 from "../../assets/image/l5/jpg/Toronto-05.jpg";
import imgC10 from "../../assets/image/l5/jpg/vw3.jpg";

const CaseStudies = () => (
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
                  <Link to="/projects/cityscape/">
                  <img src={imgC1} alt="Mobile app" className="w-100 rounded-10" />
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
                  <Link to="/projects/themergeI/" >
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
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/torontomobilewelding/" >
                  <img src={imgC7} alt="welding logo" className="w-100 rounded-10" />
                  </Link>
                </div>
                <div className="case-content px-5 px-md-9 py-9">
                  <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                    Logo Design
                  </span>
                  <h3 className="case-title gr-text-6 mb-0">
                   Toronto Mobile Welding
                  </h3>
                </div>
              </div>
              <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img">
                <div className="case-img overflow-hidden">
                <Link to="/projects/vwkosovo/">
                  <img src={imgC10} alt="web design kosovo" className="w-100 rounded-10" />
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
            </div>
          </Col>
          <Col lg="7">
            <div className="more-btn case-btn text-center">
              <Link
                to="/projects/"
                className="btn-link with-icon mb-0 gr-text-7 font-weight-bold"
              >
                See all works
                <i className="icon icon-tail-right font-weight-bold"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default CaseStudies;
