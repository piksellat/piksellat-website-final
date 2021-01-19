import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import CaseStudiesfinal from "../sections/landing1/CaseStudiesfinal";


const ProjectsPage = () => {
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
      <CaseStudiesfinal />
      </PageWrapper>
    </>
  );
};
export default ProjectsPage;
