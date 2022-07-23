import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsScrollHeader } from "../../redux/scrollHeaderSlice";
import { setTopScroll } from "../../redux/scrollHeaderSlice";
import SignUpPanel from "../SignUpPanel/SignUpPanel";
import LocationCity from "../LocationCity/LocationCity";
import LinkToScroll from "../LinkToScroll/LinkToScroll";

import "./HeaderUpper.scss";


const HeaderUpper = () => {
  const dispatch = useDispatch();
  const isHeaderScroll = useSelector(
    (state) => state.scrollHeader.isScrollHeader
  );

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  function scrollHandler(e) {
    if (e.target.documentElement.scrollTop > 106) {
      dispatch(setIsScrollHeader(true));
    } else {
      dispatch(setIsScrollHeader(false));
    }

    dispatch(setTopScroll(e.target.documentElement.scrollTop));
  }

  return (
    <div className="container">
      <div className="header_inner">
        <div className={isHeaderScroll ? "header_upper d_over" : "header_upper"}>
          <ul className="upper_left">
            <li><LocationCity /></li>
            <li><LinkToScroll to="check_location" text="Проверить адрес"/></li>
            <li>
              <span className="mid_time">
                Среднее время доставки*: <span className="time">00:24:19</span>
              </span>
            </li>
          </ul>
          <div className="upper_right">
            <span className="work_time">Время работы: с 11:00 до 23:00</span>
            <SignUpPanel /> {/*ЕСЛИ СЕССИЯ ТО СКРЫТЬ*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUpper;
