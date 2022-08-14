import React, {useState} from "react";
import { useDispatch} from "react-redux";
import { setOptions } from "../../store/slices/orderSlice";

const OrderOptions = ({ options }) => {
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
          <div
          key={option.id}
          className={i === value ? "options_item option_active" : "options_item"}
          onClick={() => getValue(option, i)}
        >
          {option.value}
        </div>
      ))}
    </div>
  );
};

export default OrderOptions;
