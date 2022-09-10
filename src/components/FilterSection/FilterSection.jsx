import React from "react";
import FilterItem from "../FIlterItem/FilterItem";

import "./FilterSection.scss";

const FilterSection = ({ items, title }) => {
  return (
    <div className="filter_section">
      <div className="filter_section_title">{title}</div>
      <ul className="filter_list">
        {items.map(item => <FilterItem key={item.title} title={item.title} value={item.value} name={item.name} />)}
      </ul>
    </div>
  );
};

export default FilterSection;
