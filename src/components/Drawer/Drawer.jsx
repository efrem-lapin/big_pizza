import React, { useState } from "react";
import Icon from "../UI/Icon";
import { useSelector } from "react-redux";
import Overlay from "../Overlay/Overlay";
import { Link } from "react-router-dom";

import "./Drawer.scss";

const Drawer = ({ title, type, children, closeCallback }) => {
  const [isClose, setIsClose] = useState(false);  // Сначала срабатывает стейт, потом через время колбек
  const sum = useSelector((state) => state.cart.cartSum);

  const footer = {
    filter: (
      <>
        <button className="drawer_button">Сбросить</button>
        <button className="drawer_button done">Применить</button>
      </>
    ),
    cart: (
      <>
        <span className="drawer_cart_sum">Итого: {sum} ₽</span>
        <Link to="order">
          <button
            className="drawer_button done button_cart"
            onClick={closeDrawer}
          >
            Оформить заказ
          </button>
        </Link>
      </>
    ),
  };

  const timer = (React.useRef().current = () => {
    setTimeout(() => {
      closeCallback();
    }, 500);
  }); // Тоймер для анимации

  function closeDrawer() {
    setIsClose(true);
    timer();
  }

  React.useEffect(() => {
    document.body.classList.add("hidden_scroll");

    return () => {
      document.body.classList.remove("hidden_scroll");
    };
  }, []);

  return (
    <Overlay closeDrawer={closeDrawer}>
      <div
        className={isClose ? "drawer deactive" : "drawer active"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer_header">
          <h2 className="drawer_title">{title}</h2>
          <div onClick={closeDrawer} className="drawer_close">
            <Icon name="cross" />
          </div>
        </div>
        <div className="drawer_content">{children}</div>
        <div className="drawer_footer">{type && footer[type]}</div>
      </div>
    </Overlay>
  );
};

export default Drawer;
