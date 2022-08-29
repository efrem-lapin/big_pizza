import React from "react";

import "./CityList.scss";

const CityList = () => {
  const cities = ['Москва', 'Санк-Петербург', 'Екатеренбург', 'Нижний Новгород']
  return (
    <ul className="city_list">
      {cities.map(city => <li className="city_list_item" key={city}>{city}</li>)}
    </ul>
  );
};

export default CityList;
