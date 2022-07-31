import React, { useState } from "react";
import InputLabel from "../UI/InputLabel";
import ProductOptions from "../ProductOptions/ProductOptions";
import RadioList from "../RadioList/RadioList";
import OrderFooter from "../OrderFooter/OrderFooter";
import TextArea from "../TextArea/TextArea";
import InputList from "../InputList/InputList";
import Selector from "../Selector/Selector";
import { useSelector } from "react-redux";

import "./FormOrder.scss";
import OrderOptions from "../OrderOptions/OrderOptions";
import OrderSection from "../OrderSection/OrderSection";
import OrderCustomer from "../OrderCustomer/OrderCustomer";
import OrderDevilery from "../OrderDevilery/OrderDevilery";

const FormOrder = () => {
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

  const listTwo = [
    {
      id: "payment1",
      name: "payment",
      label: "Наличными",
      value: "cash",
      checked: true,
    },
    { id: "payment2", name: "payment", label: "Картой", value: "card" },
    {
      id: "payment3",
      name: "payment",
      label: "ApplePay",
      value: "applepay",
    },
  ];

  const listThree = [
    {
      id: "change1",
      name: "change",
      label: "Без сдачи",
      value: "non_change",
      checked: true,
    },
    {
      id: "change2",
      name: "change",
      label: "Сдача с",
      value: "change",
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

  const [change, setChange] = useState("non_change");
  const [speed, setSpeed] = useState("fast");

  const devilery = useSelector((state) => state.order.devilery);

  return (
    <form className="order_form">
      <OrderCustomer/>

      {/* <div className="order_section">
        <div className="order_section_head">
          <h2 className="form_title">Доставка</h2>
          <OrderOptions items={prodOptions} />
        </div>
        {devilery ? (
          <>
            <div className="form_input_wrapper">
              <InputList
                items={[
                  {
                    label: "Улица*",
                    type: "text",
                    name: "street",
                    placeholder: "Пушкина",
                    id: "input1",
                  },
                ]}
              />
            </div>
            <div className="form_input_wrapper">
              <InputList items={listInput} />
            </div>
          </>
        ) : (
          <InputLabel
            label="Ресторан*"
            placeholder="Выберите ресторан"
            name="dev"
          />
        )}
        <div className="form_radio_wrapper">
          <p className="form_subtitle">Когда выполнить заказ?</p>
          <div className="form_radio_dev">
            <RadioList items={listOne} callback={setSpeed} />
            {speed === "time" && (
              <div className="dev_time">
                <Selector text="Дата" icon="arrow" type="calendar" />
                <Selector text="Время" icon="arrow" type="timerange" />
              </div>
            )}
          </div>
        </div>
      </div> */}

      <OrderDevilery />

      <OrderSection title="Оплата">
        <RadioList items={listTwo} />
      </OrderSection>

      <OrderSection title="Сдача">
        <div className="change_wrapper">
          <RadioList items={listThree} callback={setChange} />
          {change === "change" && (
            <div className="input_change_wrapper">
              <input className="change_input" type="text" placeholder="0" />
              <span className="change_span">₽</span>
            </div>
          )}
        </div>
      </OrderSection>

      <TextArea title="Комментарий" placeholder="Есть что уточнить?" />
      <OrderFooter path="/orderaccept" />
    </form>
  );
};

export default FormOrder;
