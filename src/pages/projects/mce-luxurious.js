import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import { Link } from "gatsby";
import imgC1 from "../../assets/image/portofoliopiece/mce/Stationery-scaled-uai-1440x960.jpg";




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
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">M.C.E. Luxurious</h2>
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
                  <h2 className="gr-text-6 font-weight-normal text-white mb-4">
                  M.C.E LUXORIOUS ENTERPRISE INC. are one of the Naples’s leading providers of office furniture and office fit-out products for use in the commercial interiors sector. They have an exciting exclusive portfolio and are continuously stricing for perfection!
                  </h2>
                  <p className="gr-text-6 font-weight-normal text-white mb-0">
                  With the company name having a lot of variations, we needed to develop a typographic logo solution which would work on both variations of the name, so that they could be both be recognized as part of the same brand.

We developed some brand guidelines which focused around a limited colour palette of black and gold, and focused on the logo font, Georgia, and Times New Roman as the secondary font for body copy.
                  </p>
                </div>
              </Col>
              <Col lg="3" classname="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-12 mb-2 text-primary">
                  DELIVERABLES{" "}
                  </h2>
                    <ul className="gr-text-12 list-unstyled list-group mb-0 text-primary font-weight-light">
                      <li>Branding</li>
                      <li>Print Design</li>
                    </ul>
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
