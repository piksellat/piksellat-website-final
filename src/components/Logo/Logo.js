import React from "react";
import { Link } from "gatsby";

import imgL1Logo from "../../assets/image/svg/logowhite.svg";
import imgL1LogoWhite from "../../assets/image/svg/logodark.svg";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`d-block ${className}`} {...rest}>
      {white ? (
        <img src={imgL1Logo} alt="" />
      ) : (
        <img src={imgL1LogoWhite} alt="" />
      )}
    </Link>
  );
};

export default Logo;
