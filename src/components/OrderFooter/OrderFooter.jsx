import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import "./OrderFooter.scss";

const OrderFooter = ({ path }) => {
  const sum = useSelector((state) => state.cart.sum);

  return (
    <div className="form_footer">
      <span className="drawer_cart_sum">Итого: {sum} ₽</span>
      <Link to={path}>
        <button className="drawer_button done button_cart" disabled={sum < 1}>
          Оформить заказ
        </button>
      </Link>
    </div>
  );
};

export default OrderFooter;
