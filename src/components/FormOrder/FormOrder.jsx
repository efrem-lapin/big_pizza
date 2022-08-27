import React from "react";
import RadioList from "../RadioList/RadioList";
import OrderFooter from "../OrderFooter/OrderFooter";
import TextArea from "../TextArea/TextArea";
import { useSelector } from "react-redux";
import OrderSection from "../OrderSection/OrderSection";
import OrderCustomer from "../OrderCustomer/OrderCustomer";
import OrderDevilery from "../OrderDevilery/OrderDevilery";

import "./FormOrder.scss";


const FormOrder = () => {
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

  const change = useSelector(state => state.order.change);
  const isCash = useSelector(state => state.order.payment) === "cash";

  return (
    <form className="order_form">
      <OrderCustomer/>
      <OrderDevilery />

      <OrderSection title="Оплата">
        <RadioList items={listTwo} />
      </OrderSection>

     {isCash &&  <OrderSection title="Сдача">
        <div className="change_wrapper">
          <RadioList items={listThree} />
          {change === "change" && (
            <div className="input_change_wrapper">
              <input className="change_input" type="text" placeholder="0" />
              <span className="change_span">₽</span>
            </div>
          )}
        </div>
      </OrderSection>}

      <TextArea title="Комментарий" placeholder="Есть что уточнить?" />
      <OrderFooter path="/orderaccept" />
    </form>
  );
};

export default FormOrder;
