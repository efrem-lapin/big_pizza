import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import CatigoriesData from "../../services/CatigoriesData";
import MenuMobile from "../MenuMobile/MenuMobile";
import MenuBurger from "../MenuBurger/MenuBurger";

import "./HeaderLower.scss";
import CartButton from "../CartButton/CartButton";


const HeaderLower = () => {
  const data = new CatigoriesData();
  const categories = data.catigories;

  return (
    <div className="header_low">
      <div className="container">
        <div className="header_lower">
          <div className="lower_left">
            <Logo />
          </div>
          <Navigation categories={categories} />
          <div className="lower_right">
            <CartButton hidden/>
            <MenuBurger/>
          </div>
        </div>
      </div>
      <MenuMobile/>
    </div>
  );
};

export default HeaderLower;
