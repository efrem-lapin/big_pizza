import React from "react";
import { useSelector } from "react-redux";

import "./SignUp.scss";
import SingUpPhone from "../SingUpPhone/SingUpPhone";
import SingUpCode from "../SingUpCode/SingUpCode";

const SignUp = () => {
  const phone = useSelector(state => state.sign.phone);

  return (
    <div className="sign_up_wrapper">
      {phone ? <SingUpCode /> : <SingUpPhone />}
    </div>
  );
};

export default SignUp;
