import React, { useState } from "react";
import Icon from "../UI/Icon";
import TimeRange from "../TimeRange/TimeRange";

import "./Selector.scss";


const Selector = ({ text, icon, items, type, active }) => {
  const [drop, setDrop] = useState(false);
  function toggle() {
    setDrop((prev) => !prev);
  }

  const types = {
    calendar: <TimeRange type="days" close={() => setDrop(false)}/>,
    timerange: <TimeRange type="hours" close={() => setDrop(false)}/>
  }

  return (
    <div className="selector">
     <label className="selector_box">
        <input type="date" onClick={toggle}/>
        <span className={active ? "selector_text select": "selector_text"}>{text}</span>
        <Icon name={icon} />
      </label>
      {drop && types[type]}
    </div>
  );
};

export default Selector;
