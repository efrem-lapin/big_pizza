import React from "react";
import CartContent from "../components/CartContent/CartContent";
import InputPanel from "../components/InputPanel/InputPanel";
import SliderProduct from "../components/SliderProduct/SliderProduct";
import FormOrder from "../components/FormOrder/FormOrder";
import { useSelector } from "react-redux";
import Popup from "../components/Popup/Popup";
import PopupList from "../components/PopupList/PopupList";

const OrderPage = () => {
  const sum = useSelector(state => state.cart.sum);
  const { addition, setAddition } = React.useState([]);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ARL}/sauces`)
    .then(data => data.json())
    .then(data => setAddition(data))
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="container">
      <h2 className="order_title">Ваш заказ</h2>
      <div className="order_cart">
        <CartContent />
      </div>
      <div className="box_border">
        <InputPanel placeholder="Промокод" />
        <span className="drawer_cart_sum">Итого: {sum} ₽</span>
      </div>
      <h2 className="order_subtitle">Добавить к заказу?</h2>
      <SliderProduct items={addition} />
      <FormOrder />
    </div>
  );
};

export default OrderPage;
