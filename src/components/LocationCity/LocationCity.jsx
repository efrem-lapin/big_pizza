import React, { useState } from "react";
import Icon from "../UI/Icon";
import DropList from "../DropList/DropList";
import { useSelector } from "react-redux";

import "./LocationCity.scss";

const LocationCity = () => {
  const [dropList, setDropList] = useState(false);
  const isScrollHeader = useSelector(
    (state) => state.scrollHeader.isScrollHeader
  );

  React.useEffect(() => {
    if(isScrollHeader) {
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
        <span className="location_city_title">{cityList[0].name}</span>
        <Icon name="arrow" />
      </div>
      {dropList && !isScrollHeader && <DropList list={cityList} close={closeDrop} />}
    </div>
  );
};

export default LocationCity;
