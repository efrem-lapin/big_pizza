import React from "react";
import OrderSection from "../OrderSection/OrderSection";
import InputLabel from "../UI/InputLabel";
import { setCustomer } from "../../store/orderSlice";
import { useDispatch } from "react-redux";

const OrderCustomer = () => {
  const options = [
    {label: "Имя*", type: "text", name: "name", placeholder: "Алексей", id: "custOpt1"},
    {label: "Номер телефона**", type: "text", name: "phone", placeholder: "+7 987-654-32-10", id: "custOpt2"},
    {label: "Почта*", type: "email", name: "mail", placeholder: "mail@gmail.com", id: "custOpt3"}
  ];

  const dispatch = useDispatch();

  function setValue(name, value) {
    dispatch(setCustomer({name, value}))
  }

  return (
    <OrderSection title="О вас">
     {options.map(item => <InputLabel {...item} callback={setValue}/>)}
    </OrderSection>
  );
};

export default OrderCustomer;