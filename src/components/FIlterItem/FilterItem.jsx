import React from "react";

import "./FilterItem.scss";

const FilterItem = ({ title, name, value }) => {
  return (
    <li className="filter_item">
      <label>
        <input type="checkbox" name={name} value={value}/>
        <span>{title}</span>
      </label>
    </li>
  );
};

export default FilterItem;
