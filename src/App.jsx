import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import OrderAccept from "./pages/OrderAccept";
import AccountPage from "./pages/AccountPage";
import Cart from "./components/Cart/Cart";
import PopupList from "./components/PopupList/PopupList";

import "./App.scss";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [pizza, setPizza] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/pizza')
    .then(res => res.json())
    .then(data => setPizza(data));
  }, []);

  console.log(pizza);
    return (
    <div className="App">
      <PopupList />
      <Cart />
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/orderaccept" element={<OrderAccept />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
