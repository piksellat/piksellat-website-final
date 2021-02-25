import React, { useContext } from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  const linkClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  const iconClassName =
    gContext.footer.theme === "dark"
      ? "text-storm gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  return (
    <>
      <div
        className={`footer-section pt-15 pt-lg-25 pb-lg-21 ${
          gContext.footer.theme === "dark"
            ? "dark-mode-texts bg-blackish-blue"
            : ""
        }`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="3" md="4">
              <Logo
                white={gContext.footer.theme === "dark"}
                className="footer-logo mb-4"
              />
              
            </Col>
            <Col lg="8" md="8" className="offset-lg-1">
              <Row>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Company</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link to="/about" className={linkClassName}>
                          About
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/#" className={linkClassName}>
                          Services
                        </Link>
                      </li>
                      
                      <li className="py-2">
                        <Link to="/contact" className={linkClassName}>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Services</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link to="/projects" className={linkClassName}>
                          Branding
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/projects" className={linkClassName}>
                          Web
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/projects" className={linkClassName}>
                          eCommerce
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/projects" className={linkClassName}>
                          Marketing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Follow us</p>
                    <ul className="social-icons py-7 list-unstyled mb-7 mb-lg-0">
                <li className="mr-2">
                  <Link to="https://twitter.com/piksellat" target="_blank" className={iconClassName}>
                    <i className="icon icon-logo-twitter"></i>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link to="https://facebook.com/piksellat" target="_blank" className={iconClassName}>
                    <i className="icon icon-logo-facebook"></i>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link to="https://instagram.com/piksellat" target="_blank" className={iconClassName}>
                    <i className="icon icon-instant-camera-2"></i>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link to="https://www.linkedin.com/company/piksellat/" target="_blank" className={iconClassName}>
                    <i className="icon icon-logo-linkedin"></i>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link to="https://dribbble.com/piksellat" target="_blank" className={iconClassName}>
                    <i className="icon icon-logo-dribbble"></i>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link to="https://behance.net/piksellat" target="_blank" className={iconClassName}>
                    <i className="icon icon-logo-behance"></i>
                  </Link>
                </li>
              </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
