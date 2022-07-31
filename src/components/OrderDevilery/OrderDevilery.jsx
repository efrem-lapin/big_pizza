import OrderTime from "../OrderTime/OrderTime";
import React, { useState } from "react";
import InputLabel from "../UI/InputLabel";
import RadioList from "../RadioList/RadioList";
import InputList from "../InputList/InputList";
import { useSelector } from "react-redux";
import OrderOptions from "../OrderOptions/OrderOptions";
import OrderAdress from "../OrderAdress/OrderAdress";
import RestaurantList from "../RestaurantList/RestaurantList";
import OrderSection from "../OrderSection/OrderSection";

const OrderDevilery = () => {
  const listInput = [
    {
      label: "Дом",
      type: "text",
      name: "house",
      placeholder: "1а",
      id: "input2",
    },

    {
      label: "Подъезд*",
      type: "text",
      name: "house",
      placeholder: "1",
      id: "input3",
    },

    {
      label: "Квартира",
      type: "text",
      name: "flat",
      placeholder: "2",
      id: "input4",
    },

    {
      label: "Этаж",
      type: "text",
      name: "floor",
      placeholder: "3",
      id: "input6",
    },

    {
      label: "Домофон",
      type: "text",
      name: "intercom",
      placeholder: "0000",
      id: "input7",
    },
  ];

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

  const prodOptions = [
    {
      id: "devi",
      name: "devilery",
      label: "Доставка",
      value: true,
      checked: true,
    },
    {
      id: "nondevi",
      name: "devilery",
      label: "Самовывоз",
      value: false,
    },
  ];
  const [speed, setSpeed] = useState("fast");

  const devilery = useSelector((state) => state.order.devilery);
  const time = useSelector(state => state.order.time);

  return (
    <div className="order_section">
      <div className="order_section_head">
        <h2 className="form_title">Доставка</h2>
        <OrderOptions items={prodOptions} />
      </div>
      {devilery ? <OrderAdress /> : <RestaurantList />}
      <div className="form_radio_wrapper">
        <p className="form_subtitle">Когда выполнить заказ?</p>
        <div className="form_radio_dev">
          <RadioList items={listOne} callback={setSpeed} />
          {time && <OrderTime />}
        </div>
      </div>
    </div>
  );
};

export default OrderDevilery;
