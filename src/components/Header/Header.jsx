import React, { useState } from "react";
import HeaderUpper from "../HeaderUpper/HeaderUpper";
import HeaderLower from "../HeaderLower/HeaderLower";

import "./Header.scss";


const Header = () => {
  return (
    <header className="header">
      <HeaderUpper/>
      <hr className="header_hr" />
      <HeaderLower />
      <hr className="header_hr" />
    </header>
  );
};

export default Header;
