import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Icon from "../UI/Icon";
import { setRestaurant } from "../../store/slices/orderSlice";
import LocationCityList from "../LocationCityList/LocationCityList";
import SelectCity from "../SelectCity/SelectCity";

import "./RestaurantList.scss";


const RestaurantList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.city.restaurants);
  const [drop, setDrop] = React.useState(false);
  const [selectCity, setSelectCity] = useState(false);
  const currRest = useSelector(state => state.order.restaurant);
  const currCity = useSelector(state => state.city.city);

  function toggleDrop() {
    setDrop((prev) => !prev);
  }

  function toggleSecetList() {
    setSelectCity(prev => !prev);
  }

  return (
    <>
      <div className="restaurants_panel" onClick={toggleDrop}>
        <span className="restaurants_text">{currRest || "Выберите ресторан"}</span>
        <Icon name="arrow" />
        {drop && (
          <ul className="restaurants_list">
            {list.length ? (
              list.map((res) => <li key={res} className="restaurants_item" onClick={() => dispatch(setRestaurant(res))}>{res}</li>)
            ) : (
              <li className="restaurants_item">
                В вашем городе нет наших ресторанов...
              </li>
            )}
          </ul>
        )}
      </div>
      <SelectCity />
    </>
  );
};

export default RestaurantList;
