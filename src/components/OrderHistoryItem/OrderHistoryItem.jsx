import React, { useState } from "react";
import HistoryList from "../HistoryList/HistoryList";
import OrderInfo from "../OrderInfo/OrderInfo";
import Icon from "../UI/Icon";

import "./OrderHistoryItem.scss";

const OrderHistoryItem = () => {
  const [drop, setDrop] = useState();

  function toggleDrop() {
    setDrop((prev) => !prev);
  }

  return (
    <div className="order_history_item">
      <div className="upper_wrapper" onClick={toggleDrop}>
        <div className="rect"></div>
        <div className="upper_content">
          <OrderInfo title="Заказ" descr="№130312" addition="22.06.21" />
          <OrderInfo title="Сумма заказа" descr="399 ₽" />
          <OrderInfo title="Статус" descr="Обрабатывается" />
          <OrderInfo title="Оплачено" descr="Картой" />
          <div className={drop ? "icon_arrow arrow_rotate" : "icon_arrow"}>
            <Icon name="arrow" />
          </div>
        </div>
      </div>

      <hr className="hr"></hr>

      <div className="down_wrapper">
        <div className="order_adress">
          ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
        </div>
        <ul className="order_history_pizza">
          <li className="history_pizza_item">
            <img
              className="history_pizza_img"
              src="img/products/pizza/pizza1.jpg"
              alt="pizza"
            />
          </li>
          <li className="history_pizza_item">
            <img
              className="history_pizza_img"
              src="img/products/pizza/pizza1.jpg"
              alt="pizza"
            />
          </li>
          <li className="history_pizza_item">
            <img
              className="history_pizza_img"
              src="img/products/pizza/pizza1.jpg"
              alt="pizza"
            />
          </li>
        </ul>
      </div>
      {drop && (
        <div className="drop_wrapper">
          <hr className="hr"></hr>
          <HistoryList />
          <hr className="hr"></hr>
          <div className="drop_repeat">Повторить заказ</div>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryItem;
