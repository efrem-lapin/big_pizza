import React from "react";

const CheckBox = ({text, name, value}) => {
  return (
    <label className="checkbox">
      <input type="checkbox" value={value} name={name} />
      <span>{text}</span>
    </label>
  );
};

export default CheckBox;
