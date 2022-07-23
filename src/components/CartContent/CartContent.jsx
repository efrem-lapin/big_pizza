import React from "react";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";

import "./CartContent.scss";

const CartContent = ({ ext }) => {
  const items = useSelector((state) => state.cart.cartList);

  return (
    <div className="cart_content">
      <ul className="cart_list">
        {items.length ? items.map(item => <CartItem item={item}/>) : <div className="cart_empty">Корзина пуста</div>}
      </ul>
    </div>
  );
};

export default CartContent;