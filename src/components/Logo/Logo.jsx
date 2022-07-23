import React from "react";
import Icon from "../UI/Icon";
import { Link } from "react-router-dom";

import "./Logo.scss";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <Icon name="logoPizza" />
        <div className="logo_title">Куда пицца</div>
      </div>
    </Link>
  );
};

export default Logo;
