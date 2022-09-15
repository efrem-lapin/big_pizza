import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NavDropList from "../../assets/data/navDropList.json";
import { setActive } from "../../store/slices/menuMobileSlice";

import "./Menu.scss";

const Menu = () => {
  const dispatch = useDispatch();
  const menuItems = NavDropList;
  function closeMenu() {
    dispatch(setActive(false));
  }
  return (
    <ul className="menu_list">
      {menuItems.map((item) => (
        <Link to={item.path} key={item.id}>
          <li className="menu_item" onClick={closeMenu}>
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
