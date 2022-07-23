import React from "react";
import Button from "../UI/Button";
import Icon from "../UI/Icon";

import "./InputPanel.scss";

const InputPanel = ({placeholder, text}) => {
  return (
    <div className="input_panel_wrapper">
      <input type="text" className="input_panel" placeholder={placeholder} />
      <Button text={<Icon name="plane"/>} />
    </div>
  );
};

export default InputPanel;
