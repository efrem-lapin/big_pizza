import React, { useState } from "react";
import SignUpPanel from "../SignUpPanel/SignUpPanel";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";

import "./MenuMobile.scss";

const MenuMobile = () => {
  const active = useSelector((state) => state.menuMobile.active);
  const [clazz, setClazz] = useState("d-none");

  React.useEffect(() => {
    if (active) {
      setClazz("");
    } else {
      setTimeout(() => {
        setClazz("d-none");
      }, 280);
    }
  }, [active]);

  return (
    <div
      className={
        active
          ? `menu_mobile menu_mobile_active`
          : `menu_mobile menu_mobile_deactive ${clazz}`
      }
    >
      <SignUpPanel />
      <Menu />
    </div>
  );
};

export default MenuMobile;
