import React, { useState } from "react";
import { useRef } from "react";

import "./ProductOptions.scss";

const ProductOptions = ({ items, callback, getValue }) => {
  function setValue(e) {
    // callback(() => e.target.value);
    getValue(e.target.name, e.target.value);
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
              onClick={setValue}
            />
            <span>{item.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
