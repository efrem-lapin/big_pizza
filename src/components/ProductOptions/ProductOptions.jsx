import React, { useState } from "react";
import { useRef } from "react";
import { setOptions } from "../../store/slices/prodOptionsSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setProd, calcSum } from "../../store/slices/prodOptionsSlice";

import "./ProductOptions.scss";

const ProductOptions = ({ options }) => {
  // const dispatch = useDispatch();
  // function setValue(e, item) {
  //   if (e.target.checked) dispatch(setOptions({ [item.name]: item.value }));
  //   dispatch(calcSum());
  // }

  const [value, setValue] = useState(0);

  return (
    <div className="options_list">
      {options.map((option, i) => (
        <button
          className={i === value ? "options_item option_active" : "options_item"}
          onClick={() => setValue(i)}
        >
          {option.title}
        </button>
      ))}
    </div>
  );
};

export default ProductOptions;
