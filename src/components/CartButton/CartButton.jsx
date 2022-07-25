import React from "react";
import Icon from "../UI/Icon";
import { useDispatch, useSelector } from "react-redux";
import { setIsCart } from "../../store/cartSlice";
import { setActive } from "../../store/menuMobileSlice";

import "./CartButton.scss";

const CartButton = ({hidden}) => {
  const cart = useSelector((state) => state.cart.cartList);
  const sum = cart.length && cart.reduce((sum, item) => sum + item.price * item.count, 0);

  const dispatch = useDispatch();
  function openCart() {
    dispatch(setIsCart(true));
    dispatch(setActive(false));
  }
  return (
    <div className={hidden ? "cart cart_btn_none" : "cart"} onClick={openCart}>
      <Icon name="shopingBug" />
      <span className="cart_sum">{sum} ₽</span>
    </div>
  );
};

export default CartButton;
