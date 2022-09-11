import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { clearCart } from "../../store/slices/cartSlice";
import { setProducts } from "../../store/slices/orderSlice";

import "./OrderFooter.scss";

const OrderFooter = ({ path }) => {
  const sum = useSelector((state) => state.cart.sum);
  const productList = useSelector(state => state.cart.list);
  const dispatch = useDispatch();

  function sendOrder(){
    dispatch(setProducts(productList))
    dispatch(clearCart());
  }

  return (
    <div className="form_footer">
      <span className="drawer_cart_sum">Итого: {sum} ₽</span>
      <Link to={path} onClick={sendOrder}>
        <button className="drawer_button done button_cart" disabled={sum < 1}>
          Оформить заказ
        </button>
      </Link>
    </div>
  );
};

export default OrderFooter;
