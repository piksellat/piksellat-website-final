import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgB1 from "../../assets/image/l2/png/testimonial-brand-logo1.png";
import imgB2 from "../../assets/image/l2/png/testimonial-brand-logo2.png";
import imgB3 from "../../assets/image/l2/png/testimonial-brand-logo1.png";

import imgT1 from "../../assets/image/l2/png/l2-testimonial1.png";
import imgT2 from "../../assets/image/l2/png/l2-testimonial2.png";
import imgT3 from "../../assets/image/l2/png/l2-testimonial3.png";

const Testimonial = () => {
  return (
    <>
      {/* <!-- Testimonial Area --> */}
      <div className="testimonial-section pt-15 pt-lg-24 pb-lg-12 bg-default-1">
        <Container>
          <Row className="align-items-center justify-content-around">
            <Col lg="4" md="6" sm="9" className="mb-16">
              <div className="single-testimonial text-center h-100 d-flex flex-column px-5">
                <p className="review-text mb-0 gr-text-10 gr-text-color">
                  “When I saw the branding I could not believe my eyes. The logo is even better than I could have ever thought up. Simple, concise, and to the point, Yet BOLD and inspiring! Thank you so much for your hard work!”
                </p>
                <div className="user-block media pt-9 pt-lg-12 d-flex justify-content-center mt-auto">
                  <div className="user-image circle-md mr-7">
                    <img className="w-100" src={imgT1} alt="" />
                  </div>
                  <div className="user-text text-left align-self-center">
                    <h4 className="user-title gr-text-9 mb-0">Erin D. Hughes</h4>
                    <span className="user-rank gr-text-11 gr-text-color-opacity">
                      Author
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="9" className="mb-16">
              <div className="single-testimonial text-center h-100 d-flex flex-column px-5">
                <p className="review-text mb-0 gr-text-10 gr-text-color">
                  “Piksellat took the concept and created a beautiful work of art that is not only a stunning cover design, it is clear and to the point. They were easy to work with on revisions, most of which were minor because the design itself was perfect the first time. I am a bit of a perfectionist. The design was great from the get-go. Kind, helpful, and very patient. I am thrilled with the final product!”
                </p>
                <div className="user-block media pt-9 pt-lg-12 d-flex justify-content-center mt-auto">
                  <div className="user-image circle-md mr-7">
                    <img className="w-100" src={imgT2} alt="" />
                  </div>
                  <div className="user-text text-left align-self-center">
                    <h4 className="user-title gr-text-9 mb-0">
                    Gloria Ginn
                    </h4>
                    <span className="user-rank gr-text-11 gr-text-color-opacity">
                      Author
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="9" className="mb-16">
              <div className="single-testimonial text-center h-100 d-flex flex-column px-5">
                <p className="review-text mb-0 gr-text-10 gr-text-color">
                  “WOW! What can I say! They brought my dream to life. They used their own creative input to provide me with a book cover that I myself could not have imagined. I am so thankful for their work! Please book with them! Very friendly and responsive, their prices are very fair, and they delivered early!”
                </p>
                <div className="user-block media pt-9 pt-lg-12 d-flex justify-content-center mt-auto">
                  <div className="user-image circle-md mr-7">
                    <img className="w-100" src={imgT3} alt="" />
                  </div>
                  <div className="user-text text-left align-self-center">
                    <h4 className="user-title gr-text-9 mb-0">Myles Harris</h4>
                    <span className="user-rank gr-text-11 gr-text-color-opacity">
                      Author
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Testimonial;
