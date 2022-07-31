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
