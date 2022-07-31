import React from "react";
import { useDispatch} from "react-redux";
import { setOptions } from "../../store/orderSlice";

const OrderOptions = ({ items }) => {
  const dispatch = useDispatch();

  function setValue(e, name, value) {
    if (e.target.checked) dispatch(setOptions({ name, value }));
  }

  return (
    <div className="options_list">
      {items.map((item) => (
        <div className="options_item" key={item.id}>
          <label>
            <input
              type="radio"
              name={item.name}
              value={item.value}
              defaultChecked={item.checked}
              onClick={(e) => setValue(e, item.name, item.value)}
            />
            <span>{item.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default OrderOptions;
