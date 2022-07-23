import React from "react";

import "./CityList.scss";

const CityList = () => {
  return (
    <ul className="city_list">
      <li className="city_list_item">Москва</li>
      <li className="city_list_item">Санк-Петербург</li>
      <li className="city_list_item">Екатеренбург</li>
      <li className="city_list_item">Великий Новгород</li>
      <li className="city_list_item">Воронеж</li>
    </ul>
  );
};

export default CityList;
