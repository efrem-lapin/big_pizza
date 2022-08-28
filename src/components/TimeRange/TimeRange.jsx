import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../store/slices/orderSlice";

import "./TimeRange.scss";


const TimeRange = ({ type, close }) => {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 86400000);
  const afterTomorrow = new Date(today.getTime() + (86400000 * 2));
  const selectDay = useSelector(state => state.order.time.day);

  const data = {
    hours: [
      { name: "timeRange", time: "09:00 - 10:00", id: "time1" },
      { name: "timeRange", time: "10:00 - 11:00", id: "time2" },
      { name: "timeRange", time: "11:00 - 12:00", id: "time3" },
      { name: "timeRange", time: "12:00 - 13:00", id: "time4" },
      { name: "timeRange", time: "13:00 - 14:00", id: "time5" },
      { name: "timeRange", time: "14:00 - 15:00", id: "time6" },
      { name: "timeRange", time: "15:00 - 16:00", id: "time7" },
      { name: "timeRange", time: "16:00 - 17:00", id: "time8" },
    ],
    days: [
      { name: "day", time: today.toLocaleDateString(), id: "time01" },
      { name: "day", time: tomorrow.toLocaleDateString(), id: "time02" },
      { name: "day", time: afterTomorrow.toLocaleDateString(), id: "time03" },
    ],
  };

  const dispatch = useDispatch();

  function setValue(name, value) {
    dispatch(setTime({name, value}));
    close();
  }

  if (selectDay === today.toLocaleDateString() && type === "hours") {
    const hour = today.getHours();
    data.hours = data.hours.filter(item => Number(item.time.slice(0, 2)) > hour);
  }

  return (
    <ul className="time_range">
      {data[type].map((item) => (
        <li key={item.id} className="time_range_item" onClick={() => setValue(item.name, item.time)}>
          {item.time}
        </li>
      ))}
    </ul>
  );
};

export default TimeRange;