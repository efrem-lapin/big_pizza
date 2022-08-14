import React, { useState } from "react";
import { useRef } from "react";
import { setOptions } from "../../store/slices/prodOptionsSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setProd, calcSum } from "../../store/slices/prodOptionsSlice";

import "./ProductOptions.scss";

const ProductOptions = ({ options }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  React.useEffect(() => {
    dispatch(setOptions({[options[0].name]: options[0].value}));
  }, []);

  const getValue = ({name, value}, index) => {
    setValue(index);
    dispatch(setOptions({[name]: value}));
  }

  return (
    <div className="options_list">
      {options.map((option, i) => (
        <button
          key={option.id}
          className={i === value ? "options_item option_active" : "options_item"}
          onClick={() => getValue(option, i)}
        >
          {option.value}
        </button>
      ))}
    </div>
  );
};

export default ProductOptions;
