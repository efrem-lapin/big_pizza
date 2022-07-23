import React, { useState } from "react";
import OrderInfo from "../OrderInfo/OrderInfo";
import CheckBox from "../UI/CheckBox";
import Icon from "../UI/Icon";
import InputLabel from "../UI/InputLabel";
import Button from "../UI/Button";

import "./AccountSetting.scss";

const AccountSetting = () => {
  const [change, setChange] = useState(null);
  return (
    <div className="account_setting">
      <div className="account_data">
        <div className="account_head">
          <div className="account_title">Личные данные</div>
          {change !== "data" && (
            <div className="account_change" onClick={() => setChange("data")}>
              <Icon name="pen" />
              Изменить
            </div>
          )}
        </div>
        {change === "data" ? (
          <>
            <div className="account_data_list change_data">
              <InputLabel
                type="text"
                label="Имя*"
                name="data_change"
                placeholder="Имя"
                value="Вадим"
              />
              <InputLabel
                type="text"
                label="Номер телефона*"
                name="data_change"
                placeholder="+7"
              />
              <InputLabel
                type="mail"
                label="Почта"
                name="data_change"
                placeholder="mail@gmail.com"
              />
              <InputLabel
                type="mail"
                label="Дата рождения"
                name="data_change"
                placeholder="01.01.1970"
              />
            </div>
            <div
              className="account_setting_btn"
              onClick={() => setChange(null)}
            >
              <Button text="Сохранить изменения" />
            </div>
          </>
        ) : (
          <div className="account_data_list">
            <OrderInfo title="Имя*" descr="Вадим" />
            <OrderInfo title="Номер телефона*" descr="+7 (926) 223-10-11" />
            <OrderInfo title="Почта" descr="mail@gmail.com" />
            <OrderInfo title="Дата рождения" descr="13.02.1996" />
          </div>
        )}
      </div>
      <div className="account_data password">
        <div className="account_head">
          <div className="account_title">Пароль</div>
          {change !== "pass" && (
            <div className="account_change" onClick={() => setChange("pass")}>
              <Icon name="pen" />
              Изменить
            </div>
          )}
        </div>
        {change === "pass" && (
          <>
            <div className="account_data_list" style={{ margin: "16px 0px" }}>
              <InputLabel
                type="password"
                label="Старый пароль"
                name="data_change"
                placeholder="********"
              />
              <InputLabel
                type="password"
                label="Новый пароль"
                name="data_change"
                placeholder="********"
              />
              <InputLabel
                type="password"
                label="Повторите пароль"
                name="data_change"
                placeholder="********"
              />
            </div>
            <div
              className="account_setting_btn"
              onClick={() => setChange(null)}
            >
              <Button text="Сохранить изменения" />
            </div>
          </>
        )}
      </div>
      <div className="account_data">
        <div className="account_head">
          <div className="account_title">Подписки</div>
        </div>
        <div className="account_subs">
          <CheckBox
            text="Получать предложения и акции"
            value="yes"
            name="subs"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
