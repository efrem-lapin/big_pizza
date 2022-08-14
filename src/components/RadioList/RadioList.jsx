import React from "react";
import { setOptions } from "../../store/slices/orderSlice";
import { useDispatch } from "react-redux";

import "./RadioList.scss";

const RadioList = ({ items = [], callback }) => {
  // function setValue(e) {
  //   callback(() => e.target.value);
  // }

  const dispatch = useDispatch();

  function setValue(obj) {
    dispatch(setOptions(obj));
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
            onClick={() => setValue({[item.name]: item.value})}
          />
          <span className="radio_span">{item.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioList;
