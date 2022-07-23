import React, { useState, useRef } from "react";
import Icon from "../UI/Icon";
import SliderProdItem from "../SliderProdItem/SliderProdItem";

import "./SliderProduct.scss";

const SliderProduct = ({ items =[] }) => {
  const [current, setCurrent] = useState(0);
  const fullWidth = 190 * (6 - 4);
  const end = current > -fullWidth;

  function movePrev() {
    setCurrent((prev) => prev + 222);
  }

  function moveNext({ items }) {
    setCurrent((prev) => prev - 222);
  }

  return (
    <div className="slider">
      {current ? (
        <div className="slider_btn prev_btn" onClick={movePrev}>
          <Icon name="prev" />
        </div>
      ) : null}
      <ul className="slider_list">
        <div
          className="slider_inner"
          style={{ transform: `translateX(${current}px)` }}
        >
          {items.map((item) => (
            <SliderProdItem key={item.id} item={item}/>
          ))}
        </div>
      </ul>
      {end ? (
        <div className="slider_btn next_btn" onClick={moveNext}>
          <Icon name="next" />
        </div>
      ) : null}
    </div>
  );
};

export default SliderProduct;
