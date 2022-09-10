import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleItemFilter } from "../../store/slices/filterSlice";

import "./FilterItem.scss";

const FilterItem = ({ title, name, value }) => {
  const dispatch = useDispatch();
  const listFilters = useSelector(state => state.filter.list);

  const active = listFilters.includes(value);

  function toggleFilter() {
    dispatch(toggleItemFilter(value))
  }

  return (
    <li className={active ? "filter_item filter_item_active" : "filter_item"} onClick={toggleFilter}>{value}</li>
  );
};

export default FilterItem;
