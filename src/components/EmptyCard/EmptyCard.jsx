import React from "react";

import "./EmptyCard.scss";

const EmptyCard = () => {
  return (
    <li className="empty_item">
     <div className="empty_img"></div>
        <div className="empty_text">
          <div className="empty_title"></div>
          <div className="empty_descr"></div>
        <div className="empty_price_info">
          <div className="empty_button"></div>
          <div className="empty_price"></div>
        </div>
      </div>
    </li>
  );
};

export default EmptyCard;
