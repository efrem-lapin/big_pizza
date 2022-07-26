import React from "react";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";

import "./CartContent.scss";

const CartContent = () => {
  const items = useSelector((state) => state.cart.list);

  return (
    <div className="cart_content">
      <ul className="cart_list">
        {items.length ? items.map((item) => <CartItem key={item.id} item={item}/>) : <div className="cart_empty">Корзина пуста</div>}
      </ul>
    </div>
  );
};

export default CartContent;