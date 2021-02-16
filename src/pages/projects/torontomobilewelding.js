import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import { Link } from "gatsby";
import imgC1 from "../../assets/image/portofoliopiece/torontomobilewelding/Toronto-01.jpg";
import imgC2 from "../../assets/image/portofoliopiece/torontomobilewelding/Toronto-02.jpg";
import imgC3 from "../../assets/image/portofoliopiece/torontomobilewelding/Toronto-03.jpg";
import imgC4 from "../../assets/image/portofoliopiece/torontomobilewelding/Toronto-04.jpg";
import imgC5 from "../../assets/image/portofoliopiece/torontomobilewelding/Toronto-05.jpg";
import imgC6 from "../../assets/image/portofoliopiece/torontomobilewelding/Toronto-06.jpg";






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
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">Toronto Mobile Welding</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
     
        <div className="inner-banner">
          
            <Row className="justify-content-center  no-padding">
    
              <Col xs="12">
                <div className="banner-fluid-image pt-lg-0 ml-0 mr-0">
                  <img src={imgC1} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          
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
                  Toronto Mobile Welding Branding
                  </h2>
                </div>
              </Col>
              <Col lg="3" classname="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-12 mb-2 text-primary">
                  DELIVERABLES{" "}
                  </h2>
                    <ul className="gr-text-12 list-unstyled list-group mb-0 text-primary font-weight-light">
                      <li>Logo Design</li>
                      <li>Branding</li>

                    </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="inner-banner">
          
          <Row className="justify-content-center  no-padding">
  
            <Col xs="12">
              <div className="banner-fluid-image pt-lg-0 ml-0 mr-0">
                <img src={imgC2} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        
      </div>
      <div className="inner-banner">
          
          <Row className="justify-content-center  no-padding">
  
            <Col xs="12">
              <div className="banner-fluid-image pt-lg-0 ml-0 mr-0">
                <img src={imgC3} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        
      </div>
      <div className="inner-banner">
          
          <Row className="justify-content-center  no-padding">
  
            <Col xs="12">
              <div className="banner-fluid-image pt-lg-0 ml-0 mr-0">
                <img src={imgC4} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        
      </div>
      <div className="inner-banner">
          
          <Row className="justify-content-center  no-padding">
  
            <Col xs="12">
              <div className="banner-fluid-image pt-lg-0 ml-0 mr-0">
                <img src={imgC5} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        
      </div>
      <div className="inner-banner">
          
          <Row className="justify-content-center  no-padding">
  
            <Col xs="12">
              <div className="banner-fluid-image pt-lg-0 ml-0 mr-0">
                <img src={imgC6} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        
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
