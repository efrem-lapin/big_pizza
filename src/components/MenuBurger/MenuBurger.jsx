import React from "react";
import { setActive } from "../../store/slices/menuMobileSlice";
import { useDispatch, useSelector } from "react-redux";

import "./MenuBurger.scss";

const MenuBurger = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.menuMobile.active);
  const cart = useSelector((state) => state.cart.list);

  function toggle() {
    dispatch(setActive(!active));
  }

  return (
    <>
      {cart.length ? <div className="burger_circle">{cart.length}</div> : null}
      <div
        className={active ? "menu_burger burger_active" : "menu_burger"}
        onClick={toggle}
      >
        <span className="burger_line"></span>
        <span className="burger_line"></span>
        <span className="burger_line"></span>
      </div>
    </>
  );
};

export default MenuBurger;
