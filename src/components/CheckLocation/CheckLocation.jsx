import React from "react";
import Button from "../UI/Button";
import Icon from "../UI/Icon";

import "./CheckLocation.scss";

const CheckLocation = () => {
  return (
    <div className="check_location">
      <span id="check_location">Проверить адрес доставки</span>
      <div className="check_location_box">
        <Icon name="location" />
        <input type="text" placeholder="Адрес" />
        <div className="location_btn">
          <Button text={<Icon name="plane" />} />
        </div>
      </div>
      <Button text="Проверить" />
    </div>
  );
};

export default CheckLocation;
