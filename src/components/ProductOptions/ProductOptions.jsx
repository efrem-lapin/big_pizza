import React, { useState } from "react";
import { useRef } from "react";
import { setOptions } from "../../store/slices/prodOptionsSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setProd, calcSum } from "../../store/slices/prodOptionsSlice";

import "./ProductOptions.scss";

const ProductOptions = ({ items }) => {
  const dispatch = useDispatch();
  function setValue(e, item) {
    if (e.target.checked) dispatch(setOptions({[item.name]: item.value}));
    dispatch(calcSum());
  }

  return (
    <div className="options_list">
      {items.map((item) => (
        <div className="options_item" key={item.id}>
          <label>
            <input
              type="radio"
              name={item.name}
              value={item.value}
              defaultChecked={item.checked}
              onClick={(e) => setValue(e, item)}
            />
            <span>{item.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
