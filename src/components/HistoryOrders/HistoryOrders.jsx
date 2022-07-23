import React from "react";
import OrderHistoryItem from "../OrderHistoryItem/OrderHistoryItem"
import Pagination from "../Pagination/Pagination";

const HistoryOrders = () => {
  return (
    <div className="history_orders">
      <OrderHistoryItem />
      <OrderHistoryItem />
      <OrderHistoryItem />
      <OrderHistoryItem />
      <OrderHistoryItem />
      <OrderHistoryItem />
      <Pagination num={12} />
    </div>
  );
};

export default HistoryOrders;
