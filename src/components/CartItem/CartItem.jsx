import React from "react";
import {
  addProdCount,
  removeProdCount,
  removeProduct,
} from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import IngredientsIcons from "../../services/IngredientsIcons";

import "./CartItem.scss";
import Icon from "../UI/Icon";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const Icons = new IngredientsIcons();

  if (item.count < 1) {
    dispatch(removeProduct(item.idItemCart));
  }

  function addCount(idItemCart) {
    dispatch(addProdCount(idItemCart));
  }

  function removeCount(idItemCart) {
    dispatch(removeProdCount(idItemCart));
  }

  return (
    <li className="cart_item">
      {item.extras ? (
        <div className="ex_list">
          {item.extras.map((ex) => (
            <div className="ex_item">{Icons.getIcon(ex.icon)}</div>
          ))}
        </div>
        
      ) : null}
      <img className="cart_item_img" src={item.img} alt="cart_img" />
      <div className="cart_item_info">
        <div className="cart_item_text">
          <h3 className="cart_item_title">{item.name}</h3>
          <p className="cart_item_options">{item.descr}</p>
          {item.weigth && <div className="cart_item_weigth">{item.weigth} гр</div>}
        </div>
        <div className="cart_item_amount">
          <div className="cart_item_counter">
            <div
              className="cart_counter_btn"
              onClick={() => removeCount(item.idItemCart)}
            >
              -
            </div>
            <div className="cart_counter_btn">{item.count}</div>
            <div className="cart_counter_btn" onClick={() => addCount(item.idItemCart)}>
              +
            </div>
          </div>
          <h2 className="cart_item_sum">{item.sum || item.price} ₽</h2>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
