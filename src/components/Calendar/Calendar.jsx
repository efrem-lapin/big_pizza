import React from "react";
import { useState } from "react";
import CalendarDate from "../../services/CalendarDate";
import Icon from "../UI/Icon";

import "./Calendar.scss";

const Calendar = () => {
  const calendar = new CalendarDate();
  const days = calendar.getDays();
  const month = calendar.getMonth();
  const nextMonth = calendar.getNextMonth();
  const [selected, setSelected] = useState(calendar.getToday());

  return (
    <div className="calendar">
      <div className="calendar_head">
        <Icon name="prev"/>
        <h3 className="calendar_title">{month + " / " + nextMonth}</h3>
        <Icon name="next"/>
      </div>
      <ul className="calendar_list">
        {days.map((day) => (
          <li className={day.day === selected ? "calendar_day selected_day" : "calendar_day"} onClick={() => setSelected(day.day)}>{day.day}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
