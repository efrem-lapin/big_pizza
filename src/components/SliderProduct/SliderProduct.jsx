import React, { useState, useRef } from "react";
import Icon from "../UI/Icon";
import SliderProdItem from "../SliderProdItem/SliderProdItem";

import "./SliderProduct.scss";

const SliderProduct = ({ items = [] }) => {
  const [current, setCurrent] = useState(0);
  const start = current < 0;
  
  const widthWindow = window.screen.width;
  let widthItem = 235;
  let marginItem = 23;
  let countWindowItem = 5;

  if (widthWindow < 1441) {
    widthItem = 180;
    marginItem = 20;
  }
  
  if (widthWindow < 1025) {
    countWindowItem = 4;
    widthItem = 170;
    marginItem = 18;
  }

  const fullWidth = Math.round((widthItem + marginItem) * items.length - marginItem);
  const end = current > -(fullWidth - (widthItem + marginItem) * countWindowItem);

  function movePrev() {
    setCurrent((prev) => prev + Math.round(widthItem + marginItem));
  }

  function moveNext() {
    setCurrent((prev) => prev - Math.round(widthItem + marginItem));
  }

  return (
    <div className="slider">
      {start ? (
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
            <SliderProdItem key={item.id} item={item} />
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