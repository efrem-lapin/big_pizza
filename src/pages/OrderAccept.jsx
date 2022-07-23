import React from "react";
import Button from "../components/UI/Button";

const OrderAccept = () => {
  return (
    <div className="container">
      <div className="order_accept_wrapper">
        <img
          src="img/orderaccept.png"
          alt="order accept"
          className="order_accept_img"
        />
        <h2 className="order_accept_title">Заказ №310202 принят</h2>
        <p className="order_accept_descr">
          Спасибо за заказ!<br />Примерное время доставки 45 минут. Статус отследить
          можно нажав на кнопку ниже
        </p>
        <Button text="Отследить заказ" />
      </div>
    </div>
  );
};

export default OrderAccept;
