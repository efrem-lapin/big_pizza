import React, { useState } from "react";
import Button from "../UI/Button";
import { setPhone } from "../../store/slices/signSlice";
import { useDispatch } from "react-redux";

const SingUpPhone = () => {
  const dispatch = useDispatch();
  const [telphone, setTelphone] = useState("");

  function correctNumber(ev) {
    const number = ev.target.value.replace(/\D/g, '')
    setTelphone(number);
  }

  function callback() {
    dispatch(setPhone({phone: telphone}));
  }

  return (
    <>
      <div className="sign_up_title">Вход в аккаунт</div>
      <p className="sign_up_descr">
        Сможете быстро оформлять заказы, использовать бонусы
      </p>
      <div className="sign_up_form">
        <div className="input_label">
          <input
            className="input_panel"
            label="Номер телефона"
            placeholder="Введите номер"
            value={telphone}
            type="tel"
            name="phone"
            onChange={correctNumber}
          />
        </div>
        <div className="sign_btn" onClick={callback}>
          <Button text="Войти"/>
        </div>
      </div>
    </>
  );
};

export default SingUpPhone;
