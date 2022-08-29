import React, { useState } from "react";
import Icon from "../UI/Icon";
import DropList from "../DropList/DropList";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../../store/slices/citySlice";
import { setRestaurant } from "../../store/slices/orderSlice";

import "./LocationCity.scss";

const LocationCity = () => {
  const dispatch = useDispatch();
  const [dropList, setDropList] = useState(false);
  const isScrollHeader = useSelector((state) => state.scrollHeader.isScrollHeader);
  const currCity = useSelector(state => state.city.city);

  React.useEffect(() => {
    if (isScrollHeader) {
      setDropList(false);
    }
  }, [isScrollHeader]);

  function toggleCityList(e) {
    e.stopPropagation();
    setDropList((prev) => !prev);
  }

  function closeDrop(e) {
    setDropList(false);
  }

  function selectCity(city) {
    dispatch(setCity(city));
    dispatch(setRestaurant(''));
    setDropList(false);
  }

  const cityList = [
    { name: "Москва", id: "city1" },
    { name: "Санкт-Петербург", id: "city2" },
    { name: "Екатеринбург", id: "city3" },
    { name: "Нижний Новгород", id: "city4" },
    { name: "Воронеж", id: "city5" },
    { name: "Ростов", id: "city6" },
  ];

  return (
    <div className="location_city_wrapper">
      <div className="location_city" onClick={toggleCityList}>
        <Icon name="location" />
        <span className="location_city_title">{currCity}</span>
        <Icon name="arrow" />
      </div>
      {dropList && !isScrollHeader && (
        <ul className="location_city_list">
          {cityList.map((city) => (
            <li
              className="location_city_item"
              key={city.id}
              onClick={() => selectCity(city.name)}
            >
              {city.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationCity;
