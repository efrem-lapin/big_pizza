import React from "react";
import IconLibrary from "../../services/IconLibrary";

import "./UI.scss";

const Icon = ({ name }) => {
  const icons = new IconLibrary();
  return <div className="icon">{icons.getIconByName(name)}</div>;
};

export default Icon;