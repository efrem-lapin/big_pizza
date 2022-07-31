import React from "react";

import "./UI.scss";

const InputLabel = ({label, placeholder, type = "text", name, callback}) => {
  function setValue(e) {
    callback(name, e.target.value)
  }
  return (
    <label className="input_label">
      <div className="input_title">{label}</div>
      <input onChange={setValue} type={type} className="input_panel" placeholder={placeholder} name={name}/>
    </label>
  );
};

export default InputLabel;
