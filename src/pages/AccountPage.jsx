import React, { useState } from "react";
import AccountSetting from "../components/AccountSetting/AccountSetting";
import HistoryOrders from "../components/HistoryOrders/HistoryOrders";
import ProductOptions from "../components/ProductOptions/ProductOptions";

const AccountPage = () => {
  const [page, setPage] = useState("history");
  const items = [
    {
      id: "account1",
      label: "История заказов",
      value: "history",
      name: "account",
      checked: true,
    },

    {
      id: "account2",
      label: "Настройки",
      value: "setting",
      name: "account",
    },
  ];
  return (
    <section className="account">
      <div className="small_container">
        <div className="account_head">
          <h2 className="account_title">Мой аккаунт</h2>
          <ProductOptions
            items={items}
            callback={setPage}
          />
        </div>
        <div className="account_content">
          {page === "history" ? <HistoryOrders /> : <AccountSetting />}
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
