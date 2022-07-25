import React from "react";
import { addProdCount, removeProdCount, removeProduct} from "../../redux/cartSlice";
import { useDispatch, useSelector} from "react-redux/es/exports";

import "./CartItem.scss";

const CartItem = ({ item } ) => {
  const dispatch = useDispatch();

  if (item.count < 1) {
    dispatch(removeProduct(item.id));
  }

  function addCount(id) {
    dispatch(addProdCount(id));
  }

  function removeCount(id) {
    dispatch(removeProdCount(id));
  }

  return (
    <li className="cart_item">
      <img
        className="cart_item_img"
        src={item.img}
        alt="cart_img"
      />
      <div className="cart_item_info">
        <div className="cart_item_text">
          <h3 className="cart_item_title">{item.name}</h3>
          <p className="cart_item_options">{item.descr}</p>
        </div>
        <div className="cart_item_amount">
          <div className="cart_item_counter">
            <div className="cart_counter_btn" onClick={() => removeCount(item.id)}>-</div>
            <div className="cart_counter_btn">{ item.count }</div>
            <div className="cart_counter_btn" onClick={() => addCount(item.id)}>+</div>
          </div>
          <h2 className="cart_item_sum">{item.price} ₽</h2>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
