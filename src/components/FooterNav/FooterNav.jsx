import React from "react";
import { Link } from "react-router-dom";

import "./FooterNav.scss";

const FooterNav = ({ items = [], title = "" }) => {
  return (
    <div className="footer_nav">
      <h3 className="footer_nav_title">{ title }</h3>
      <ul className="footer_nav_list">
        {items.map(item => <Link key={item.id} to={item.path}><li className="footer_nav_item">{item.title}</li></Link>)}
      </ul>
    </div>
  );
};

export default FooterNav;