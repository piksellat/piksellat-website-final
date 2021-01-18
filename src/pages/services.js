import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing9/Hero";
import Features from "../sections/landing6/Features";


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
        <Hero />
        <Features />
        
      </PageWrapper>
    </>
  );
};
export default ServicesPage;
