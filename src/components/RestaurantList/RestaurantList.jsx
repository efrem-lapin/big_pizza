import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Icon from "../UI/Icon";
import { setRestaurant } from "../../store/slices/orderSlice";

import "./RestaurantList.scss";

const RestaurantList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.city.restaurants);
  const [drop, setDrop] = React.useState(false);
  const currRest = useSelector(state => state.order.restaurant);

  function toggleDrop() {
    setDrop((prev) => !prev);
  }

  return (
    <>
      <div className="restaurants_panel" onClick={toggleDrop}>
        <span className="restaurants_text">{currRest || "Выберите ресторан"}</span>
        <Icon name="arrow" />
        {drop && (
          <ul className="restaurants_list">
            {list.length ? (
              list.map((res) => <li className="restaurants_item" onClick={() => dispatch(setRestaurant(res))}>{res}</li>)
            ) : (
              <li className="restaurants_item">
                В вашем городе нет наших ресторанов...
              </li>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default RestaurantList;
