import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import SelectorDrop from "../SelectorDrop/SelectorDrop";
import Icon from "../UI/Icon";
import TimeRange from "../TimeRange/TimeRange";
import "./Selector.scss";

const Selector = ({ text, icon, items, type }) => {
  const [drop, setDrop] = useState(false);
  function toggle() {
    setDrop((prev) => !prev);
  }

  const types = {
    calendar: <TimeRange type="days"/>,
    timerange: <TimeRange type="hours"/>
  }

  return (
    <div className="selector">
     <label className="selector_box">
        <input type="date" onClick={toggle}/>
        <span className="selector_text">{text}</span>
        <Icon name={icon} />
      </label>
      {drop && types[type]}
    </div>
  );
};

export default Selector;
