import React, { useState } from "react";
import Modal from "../Modal/Modal";
import SignUp from "../SignUp/SignUp";
import Icon from "../UI/Icon";
import {setSign} from "../../redux/signSlice";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../redux/menuMobileSlice";

import "./SignUpPanel.scss";

const SignUpPanel = () => {
  const [signIn, setSignIn] = useState(false);
  const dispatch = useDispatch();

  function close() {
    setSignIn(false);
  }

  function open() {
    setSignIn(true)
    dispatch(setSign(true));
    dispatch(setActive(false));
  }

  return (
    <>
      {/* {signIn && (
        <Modal close={close}>
          <SignUp close={close} />
        </Modal>
      )} */}
      <div className="sign_up_panel" onClick={open}>
        <Icon name="account" />
        <span className="sing_up_text">
          Войти в аккаунт
        </span>
      </div>
    </>
  );
};

export default SignUpPanel;
