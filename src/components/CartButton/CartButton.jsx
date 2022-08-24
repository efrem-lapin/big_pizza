import React from "react";
import Icon from "../UI/Icon";
import { useDispatch, useSelector } from "react-redux";
import { setIsCart } from "../../store/slices/cartSlice";
import { setActive } from "../../store/slices/menuMobileSlice";

import "./CartButton.scss";

const CartButton = ({hidden}) => {
  const dispatch = useDispatch();
  const sum = useSelector((state) => state.cart.sum);
  const cart = useSelector(state => state.cart.list)

  function openCart() {
    dispatch(setIsCart(true));
    dispatch(setActive(false));
  }
  return (
    <div className={hidden ? "cart cart_btn_none" : "cart"} onClick={openCart}>
      {cart.length ? <div className="cart_circle">{cart.length}</div> : null}
      <Icon name="shopingBug" />
      <span className="cart_sum">{sum} ₽</span>
    </div>
  );
};

export default CartButton;
