import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

const Fact = () => (
  <>
    {/* <!-- Fact section --> */}
    <div className="fact-section bg-default-4 pt-lg-15 pb-7 pb-lg-10">
      <Container>
        <Row className="justify-content-center">
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-xl-6">
              <h3 className="title mb-7 gr-text-3">3k+</h3>
              <p className="gr-text-8 mb-0">
                Number of people and companies we have worked with.
              </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-xl-6">
              <h3 className="title mb-7 gr-text-3">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} end={95} />
                  </span>
                  %
                </LazyLoad>
              </h3>
              <p className="gr-text-8 mb-0">
                That means, over 3,000 happy customers! Be the next one.
              </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-xl-6">
              <h3 className="title mb-7 gr-text-3">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} end={3240 } />
                  </span>
                </LazyLoad>
              </h3>
              <p className="gr-text-8 mb-0">
                The amount of coffee cups we have drank until now.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Fact;
