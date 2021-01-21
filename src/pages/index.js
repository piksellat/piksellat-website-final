import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing10/Hero";
import Brands from "../sections/landing12/Brands";
import Fact from "../sections/landing1/Fact";
import Feature from "../sections/landing1/Feature";
import CTA1 from "../sections/landing1/CTA1";
import CaseStudies from "../sections/landing1/CaseStudies";
import Video from "../sections/landing8/Video";
import Testimonial from "../sections/landing11/Testimonial";
import CTA2 from "../sections/landing1/CTA2";
import Content1 from "../sections/landing6/Content1";
import Content2 from "../sections/landing6/Content2";
import Content3 from "../sections/landing6/Content3";
import Content4 from "../sections/landing6/Content4";

const IndexPage = () => {
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
        <Hero />
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
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
