import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing10/Hero";
import Services from "../sections/landing1/Services";
import Content1 from "../sections/landing1/Content1";
import Brands from "../sections/landing12/Brands";
import Fact from "../sections/landing1/Fact";
import Feature from "../sections/landing1/Feature";
import CTA1 from "../sections/landing1/CTA1";
import CaseStudies from "../sections/landing1/CaseStudies";
import Video from "../sections/landing8/Video";
import Testimonial from "../sections/landing6/Testimonial";
import CTA2 from "../sections/landing1/CTA2";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
      headerConfig={{
        theme: "dark",
        align: "right",
        button: "cta", // cta, account, null
        buttonText: "Get a free consultation",
      }}
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Services />
        <Brands />
        <Content1 />
        <Fact />
        <Feature />
        <CTA1 />
        <CaseStudies />
        <br></br>
        <br></br>
        <br></br>
        <Video />
        <Testimonial />
        <CTA2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
