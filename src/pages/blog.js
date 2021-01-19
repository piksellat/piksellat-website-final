import React from "react";

import PageWrapper from "../components/PageWrapper";
import Services from "../sections/landing10/Services";

const BlogPage = () => {
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
      < Services />
      </PageWrapper>
    </>
  );
};
export default BlogPage;
