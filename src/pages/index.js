import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing10/Hero";
import Features from "../sections/landing6/Features";
import Content3 from "../sections/landing6/Content3";
import Brands from "../sections/landing12/Brands";
import Fact from "../sections/landing1/Fact";
import Feature from "../sections/landing1/Feature";
import CTA1 from "../sections/landing1/CTA1";
import CaseStudies from "../sections/landing1/CaseStudies";
import Video from "../sections/landing8/Video";
import Testimonial from "../sections/landing11/Testimonial";
import CTA2 from "../sections/landing1/CTA2";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
      headerConfig={{
        theme: "light",
        align: "right",
        button: "null", // cta, account, null
        buttonText: "Get a free consultation",
      }}
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Features />
        <Content3 />
        <Fact />
        <Brands />
        <Feature />
        <CTA1 />
        <CaseStudies />
        <Video />
        <Testimonial />
        <CTA2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
