import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Row, Col, Container } from "react-bootstrap";
import Content1 from "../sections/landing6/Content1";
import Content2 from "../sections/landing6/Content2";
import Content3 from "../sections/landing6/Content3";
import Content4 from "../sections/landing6/Content4";
import Testimonial from "../sections/landing11/Testimonial";
import CTA2 from "../sections/landing1/CTA2";

const ServicesPage = () => {
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
        <div className="inner-banner bg-default-6 pt-24 pt-lg-30 pb-lg-15">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-12 mb-13 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-12">
                    Join at Grayic
                  </h2>
                  <p className="gr-text-8 mb-0">
                    By accessing and placing an order with UXTheme, you confirm
                    that you are in agreement with and bound by the terms and
                    conditions
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <Testimonial />
        <CTA2 />
        
      </PageWrapper>
    </>
  );
};
export default ServicesPage;
