import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import InputLabel from "../UI/InputLabel";
import { setActive } from "../../store/slices/menuMobileSlice";
import { useDispatch, useSelector } from "react-redux";

import "./SignUp.scss";

const SignUp = ({ close }) => {
  const [conf, setConf] = useState(false);
  const [code, setCode] = useState([]);
  const dispatch = useDispatch();
  const active = useSelector((state) => state.menuMobile.active);

  function setDigit(event) {
    if (event.target.value.length > 0 && event.target.value !== "") {
      const dig = event.target.value.replace(/\d [0-9]/dgi, "");
      setCode((prev) => [...prev, dig]);
    } else {
      setCode((prev) => prev.slice(0, -1));
    }

    if (code.length < 3) {
      if (event.target.value.length >= 1)
        event.target.nextElementSibling.focus();
    }

    if (code.length < 3) {
      if (event.target.value.length >= 1)
        event.target.nextElementSibling.focus();
    }
  }

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
              <input
                className="input_conf"
                placeholder="X"
                onChange={setDigit}
                value={code[0]}
              />
              <input
                className="input_conf"
                placeholder="X"
                onChange={setDigit}
                value={code[1]}
              />
              <input
                className="input_conf"
                placeholder="X"
                onChange={setDigit}
                value={code[2]}
              />
              <input
                className="input_conf"
                placeholder="X"
                onChange={setDigit}
                value={code[3]}
              />
            </div>
            <Link className="sign_btn" to="/account" onClick={close}>
              <Button text="Войти" onClick={sign} />
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
