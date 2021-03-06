import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "gatsby";

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <div className="cta-section-2 dark-mode-texts bg-blackish-blue ">
      <Container>
        <div className="cta-wrapper pt-14 pb-14 py-lg-19 border-bottom">
          <Row className="align-items-center justify-content-center">
            <Col lg="6" md="10">
              <div className="cta-text section-title">
                <h2 className="title gr-text-5 mb-7 text-white">
                  Ready to launch your next project?
                </h2>
              </div>
            </Col>
            <Col lg="4" md="10" className="offset-lg-2">
              <div className="cta-btn text-lg-right">
                <Link to="/contact">
                <Button className="gr-hover-y gr-text-7">Get started on a project</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  </>
);

export default CTA;
