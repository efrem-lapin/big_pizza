import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import InputLabel from "../UI/InputLabel";
import { setActive } from "../../redux/menuMobileSlice";
import { useDispatch, useSelector } from "react-redux";

import "./SignUp.scss";

const SignUp = ({ close }) => {
  const [conf, setConf] = useState(false);
  const dispatch = useDispatch();
  const active = useSelector(state => state.menuMobile.active);

  function sign() {
    dispatch(setActive(false));
  }

  return (
    <div className="sign_up_wrapper">
      {conf ? (
        <>
          <div className="sign_up_title">Код из СМС</div>
          <p className="sign_up_descr">На номер +7 (926) 223-10-11</p>
        </>
      ) : (
        <>
          {" "}
          <div className="sign_up_title">Вход в аккаунт</div>
          <p className="sign_up_descr">
            Сможете быстро оформлять заказы, использовать бонусы
          </p>
        </>
      )}
      <div className="sign_up_form">
        {conf ? (
          <>
            <div className="sign_conf">
              <input className="input_conf" placeholder="X" />
              <input className="input_conf" placeholder="X" />
              <input className="input_conf" placeholder="X" />
              <input className="input_conf" placeholder="X" />
            </div>
            <Link className="sign_btn" to="/account" onClick={close}>
              <Button text="Войти" onClick={sign}/>
            </Link>
          </>
        ) : (
          <>
            <InputLabel
              label="Номер телефона"
              placeholder="+7"
              type="text"
              name="phone"
            />
            <div className="sign_btn" onClick={() => setConf(true)}>
              <Button text="Войти" />
            </div>
          </>
        )}
      </div>
      {conf ? (
        <p className="sing_up_info">
          <span>Отправить код ещё раз через:</span> 59 секунд
        </p>
      ) : (
        <p className="sing_up_info">
          Продолжая, вы соглашаетесь со сбором и обработкой персональных данных
          и пользовательским соглашением
        </p>
      )}
    </div>
  );
};

export default SignUp;
