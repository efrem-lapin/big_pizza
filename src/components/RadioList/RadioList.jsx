import React from "react";

import "./RadioList.scss";

const RadioList = ({ items = [], callback }) => {
  function setValue(e) {
    callback(() => e.target.value);
  }
  return (
    <div className="radio_list">
      {items.map((item) => (
        <label className="radio_label" key={item.id}>
          <input
            type="radio"
            className="radio_input"
            name={item.name}
            value={item.value}
            defaultChecked={item.checked}
            onClick={setValue}
          />
          <span className="radio_span">{item.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioList;
