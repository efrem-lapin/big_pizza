import React from "react";
import "./HistoryList.scss";

const HistoryList = () => {
  return (
    <ul className="history_list">
      <li className="history_item">
        <img src="img/products/pizza/pizza1.jpg" alt="pizza" />
        <div className="history_item_text">
          <div className="history_item_upper">
            <h3>Пепперони по-деревенски</h3>
            <p>Традиционное тесто, 23 см</p>
          </div>
          <div className="history_item_lower">
            <div className="history_count">1 товар</div>
            <span>399 ₽</span>
          </div>
        </div>
      </li>

      <li className="history_item">
        <img src="img/products/pizza/pizza1.jpg" alt="pizza" />
        <div className="history_item_text">
          <div className="history_item_upper">
            <h3>Пепперони по-деревенски</h3>
            <p>Традиционное тесто, 23 см</p>
          </div>
          <div className="history_item_lower">
            <div className="history_count">1 товар</div>
            <span>399 ₽</span>
          </div>
        </div>
      </li>

      <li className="history_item">
        <img src="img/products/pizza/pizza1.jpg" alt="pizza" />
        <div className="history_item_text">
          <div className="history_item_upper">
            <h3>Пепперони по-деревенски</h3>
            <p>Традиционное тесто, 23 см</p>
          </div>
          <div className="history_item_lower">
            <div className="history_count">1 товар</div>
            <span>399 ₽</span>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default HistoryList;
