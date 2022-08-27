import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { setPhone } from "../../store/slices/signSlice";

const SignUpCode = () => {
  const [code, setCode] = useState([]);
  const [counter, setCounter] = React.useState(59);
  const dispatch = useDispatch();

  const phoneNumber = useSelector(state => state.sign.phone);

  function resetNumber() {
    dispatch(setPhone({}));
  }

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  function setDigit(event) {
    if (event.target.value.length > 0 && event.target.value !== "") {
      const dig = event.target.value.replace(/\d [0-9]/dgi, "");
      if (code.length < 4) setCode((prev) => [...prev, dig]);
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
  return (
    <>
      <div className="sign_up_title">Код из СМС</div>
      <p className="sign_up_descr">На номер {phoneNumber}</p>
      <div className="sign_up_form">
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
        <Link className="sign_btn" to="/account">
          <Button text="Войти" />
        </Link>
      </div>
      {counter ? <p className="sing_up_info"><span>Отправить код ещё раз через:</span> {counter} секунд</p> : <p className="border_line">Отправить код повторно</p>}
    </>
  );
};

export default SignUpCode;
