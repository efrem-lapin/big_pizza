import React, { useState } from "react";
import Icon from "../UI/Icon";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../../store/slices/citySlice";
import { setRestaurant } from "../../store/slices/orderSlice";
import LocationCityList from "../LocationCityList/LocationCityList";

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

  return (
    <div className="location_city_wrapper">
      <div className="location_city" onClick={toggleCityList}>
        <Icon name="location" />
        <span className="location_city_title">{currCity}</span>
        <Icon name="arrow" />
      </div>
      {dropList && !isScrollHeader && (
        <LocationCityList close={() => closeDrop(false)}/>
      )}
    </div>
  );
};

export default LocationCity;
