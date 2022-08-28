import OrderTime from "../OrderTime/OrderTime";
import React from "react";
import RadioList from "../RadioList/RadioList";
import { useSelector } from "react-redux";
import OrderOptions from "../OrderOptions/OrderOptions";
import OrderAdress from "../OrderAdress/OrderAdress";
import RestaurantList from "../RestaurantList/RestaurantList";

const OrderDevilery = () => {
  const listOne = [
    {
      id: "speed1",
      name: "speed",
      label: "Как можно скорее",
      value: "fast",
      checked: true,
    },
    {
      id: "speed2",
      name: "speed",
      label: "По времени",
      value: "time",
    },
  ];

  const devs = [
    {
      id: "devi",
      name: "devilery",
      value: "Доставка",
    },
    {
      id: "nondevi",
      name: "devilery",
      value: "Самовывоз",
    },
  ];
  const speed = useSelector(state => state.order.speed);
  const devilery = useSelector((state) => state.order.devilery);

  return (
    <div className="order_section">
      <div className="order_section_head">
        <h2 className="form_title">Доставка</h2>
        <OrderOptions options={devs} />
      </div>
      {devilery === "Доставка" ? <OrderAdress /> : <RestaurantList />}
      <div className="form_radio_wrapper">
        <p className="form_subtitle">Когда выполнить заказ?</p>
        <div className="form_radio_dev">
          <RadioList items={listOne}/>
          {speed === 'time' && <OrderTime />}
        </div>
      </div>
    </div>
  );
};

export default OrderDevilery;
