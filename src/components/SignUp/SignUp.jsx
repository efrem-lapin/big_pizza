import React from "react";
import { useSelector } from "react-redux";
import SignUpPhone from "../SignUpPhone/SignUpPhone";
import SignUpCode from "../SignUpCode/SignUpCode";
import { useDispatch } from "react-redux";
import { setPhone } from "../../store/slices/signSlice";

import "./SignUp.scss";


const SignUp = () => {
  const phone = useSelector(state => state.sign.phone);
  const dispatch = useDispatch();

  function clearNumber() {
    // ПРИ ПОВТОРНОЙ ПОПЫТКЕ ВХОДА СБРАСЫВАЕТСЯ НОМЕР
    dispatch(setPhone({}));
  }

  React.useEffect(() => {
    clearNumber();
  }, [])

  return (
    <div className="sign_up_wrapper">
      {phone ? <SignUpCode /> : <SignUpPhone />}
    </div>
  );
};

export default SignUp;
