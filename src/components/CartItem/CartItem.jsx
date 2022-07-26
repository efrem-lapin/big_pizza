import React from "react";
import { recount } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux/es/exports";
import Icon from "../UI/Icon";

import "./CartItem.scss";


const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function addCount(id) {
    dispatch(recount({ id, increment: true }));
  }

  function removeCount(id) {
    dispatch(recount({ id }));
  }

  const opts = Object.values(item.product.options.list);

  return (
    <li className="cart_item">
      <img className="cart_item_img" src={item.product.image} alt="cart_img" />
      <div className="cart_item_info">
        <div className="cart_item_text">
          <h3 className="cart_item_title">{item.product.title}</h3>
          {opts && <p className="cart_item_descr">{opts.map(item => <span key={item} className="cart_opt">{item}</span>)}</p>}
          {item.product.extras && (
            <div className="ex_list">
              {item.product.extras.map((ex) => (
                <div className="ex_item" key={ex.id}>
                  {<Icon name="cross"/>} {ex.title}
                </div>
              ))}
            </div>
          )}
          {item.product.ingredients && (
            <div className="ing_list">
              {item.product.ingredients.map((ing) => {
                if (ing.presence === false)
                  return (
                    <div className="ing_item" key={ing.id}>
                      {<Icon name="cross" />} {ing.name}
                    </div>
                  );
              })}
            </div>
          )}
          {item.weigth && (
            <div className="cart_item_weigth">{item.weigth} гр</div>
          )}
        </div>
        <div className="cart_item_amount">
          <div className="cart_item_counter">
            <div
              className="cart_counter_btn"
              onClick={() => removeCount(item.id)}
            >
              -
            </div>
            <div className="cart_counter_btn">{item.count}</div>
            <div className="cart_counter_btn" onClick={() => addCount(item.id)}>
              +
            </div>
          </div>
          <h2 className="cart_item_sum">{item.product.sum || item.product.price} ₽</h2>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
