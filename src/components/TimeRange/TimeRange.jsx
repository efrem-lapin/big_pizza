import React, {useState} from "react";
import "./TimeRange.scss";

const TimeRange = ({ type }) => {
  const data = {
    hours: [
      { time: "09:00 - 10:00", id: "time1" },
      { time: "10:00 - 11:00", id: "time2" },
      { time: "11:00 - 12:00", id: "time3" },
      { time: "12:00 - 13:00", id: "time4" },
      { time: "13:00 - 14:00", id: "time5" },
      { time: "14:00 - 15:00", id: "time6" },
      { time: "15:00 - 16:00", id: "time7" },
      { time: "16:00 - 17:00", id: "time8" },
    ],
    days: [
      { time: "Сегодня", id: "time01" },
      { time: "Завтра", id: "time02" },
      { time: "Послезавтра", id: "time03" },
    ],
  };

  return (
    <ul className="time_range">
      {data[type].map((item) => (
        <li key={item.id} className="time_range_item">
          {item.time}
        </li>
      ))}
    </ul>
  );
};

export default TimeRange;
