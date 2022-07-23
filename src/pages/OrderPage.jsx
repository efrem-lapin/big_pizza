import React from "react";
import CartContent from "../components/CartContent/CartContent";
import InputPanel from "../components/InputPanel/InputPanel";
import SliderProduct from "../components/SliderProduct/SliderProduct";
import FormOrder from "../components/FormOrder/FormOrder";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const cart = useSelector((state) => state.cart.cartList);
  const sum = cart.length && cart.reduce((sum, item) => sum + item.price * item.count, 0);

  const otherItems = [
    {
      title: "Картофель из печи",
      width: 95,
      price: 175,
      img: "img/products/other/frie.jpg",
      id: "slide1",
    },
    {
      title: "Филадельфия крем-брюле",
      width: 55,
      price: 120,
      img: "img/products/sushi/sushi2.jpg",
      id: "slide2",
    },
    {
      title: "Супер Филадельфия",
      width: 150,
      price: 235,
      img: "img/products/sushi/sushi1.jpg",
      id: "slide3",
    },
    {
      title: "Тигр мама",
      width: 120,
      price: 145,
      img: "img/products/other/frie.jpg",
      id: "slide4",
    },
    {
      title: "Картофель из печи",
      width: 95,
      price: 175,
      img: "img/products/other/frie.jpg",
      id: "slide5",
    },
    {
      title: "Картофель из печи",
      width: 95,
      price: 175,
      img: "img/products/other/frie.jpg",
      id: "slide6",
    },
    {
      title: "Картофель из печи",
      width: 95,
      price: 175,
      img: "img/products/other/frie.jpg",
      id: "slide7",
    },
    {
      title: "Картофель из печи",
      width: 95,
      price: 175,
      img: "img/products/other/frie.jpg",
      id: "slide8",
    },
    {
      title: "Картофель из печи",
      width: 95,
      price: 175,
      img: "img/products/other/frie.jpg",
      id: "slide9",
    },
  ];

  const sauceItems = [
    { title: "Сырный соус", price: 95, img: "img/products/sauces/cheese.jpg", id: "slide_sauce0", },
    {
      title: "Томатный соус",
      price: 69,
      img: "img/products/sauces/tomato.jpg",
      id: "slide_sauce1",
    },
    {
      title: "Майонез",
      price: 40,
      img: "img/products/sauces/mayonnaise.jpg",
      id: "slide_sauce2",
    },
    {
      title: "Аджика",
      price: 100,
      img: "img/products/sauces/adjika.jpg",
      id: "slide_sauce3",
    },
    {
      title: "Сырный соус",
      price: 95,
      img: "img/products/sauces/cheese.jpg",
      id: "slide_sauce4",
    },
    {
      title: "Томатный соус",
      price: 69,
      img: "img/products/sauces/tomato.jpg",
      id: "slide_sauce5",
    },
    {
      title: "Майонез",
      price: 40,
      img: "img/products/sauces/mayonnaise.jpg",
      id: "slide_sauce6",
    },
    {
      title: "Аджика",
      price: 100,
      img: "img/products/sauces/adjika.jpg",
      id: "slide_sauce7",
    },
  ];
  return (
    <div className="small_container">
      <h2 className="order_title">Ваш заказ</h2>
      <div className="order_cart">
        <CartContent />
      </div>
      <div className="box_border">
        <InputPanel placeholder="Промокод" />
        <span className="drawer_cart_sum">Итого: {sum} ₽</span>
      </div>
      <h2 className="order_subtitle">Добавить к заказу?</h2>
      <SliderProduct items={otherItems} />
      <h2 className="order_subtitle">Соусы</h2>
      <SliderProduct items={sauceItems} />
      <FormOrder />
    </div>
  );
};

export default OrderPage;
