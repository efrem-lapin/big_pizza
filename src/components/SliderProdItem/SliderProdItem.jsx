import React from "react";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/slices/cartSlice";
import { addPopup, removePopup } from "../../store/slices/popupSlice";

import "./SliderProdItem.scss";

const SliderProdItem = ({ item }) => {
  const dispatch = useDispatch();

  function add() {
    dispatch(addProduct({...item, options: {list: {}}}));
    dispatch(addPopup({text: "Товар добавлен!", id: item.id + Math.random()}));

    setTimeout(() => {
      dispatch(removePopup())
    }, 2000);
  }

  return (
    <li className="slider_item" >
      <img
        src={item.img}
        alt="product"
        className="slider_item_img"
      />
      <div className="slider_item_info">
        <h3 className="slider_item_title">{item.name}</h3>
        {item.width && <p className="slider_item_descr">{"Порция" + item.weigth + " гр"}</p>}
        <Button text={item.price + " ₽"} click={add}/>
      </div>
    </li>
  );
};

export default SliderProdItem;
