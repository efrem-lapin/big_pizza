import React from "react";
import Button from "../UI/Button";

import "./SliderProdItem.scss";

const SliderProdItem = ({ item }) => {
  return (
    <li className="slider_item">
      <img
        src={item.img}
        alt="product"
        className="slider_item_img"
      />
      <div className="slider_item_info">
        <h3 className="slider_item_title">{item.title}</h3>
        {item.width && <p className="slider_item_descr">{"Порция" + item.width + " гр"}</p>}
        <Button text={item.price + " ₽"} />
      </div>
    </li>
  );
};

export default SliderProdItem;
