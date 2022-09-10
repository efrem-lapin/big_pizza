import React from "react";
import { useDispatch } from "react-redux";
import { setCity } from "../../store/slices/citySlice";
import { setRestaurant } from "../../store/slices/orderSlice";

const cityList = [
    { name: "Москва", id: "city1" },
    { name: "Санкт-Петербург", id: "city2" },
    { name: "Екатеринбург", id: "city3" },
    { name: "Нижний Новгород", id: "city4" },
    { name: "Воронеж", id: "city5" },
    { name: "Ростов", id: "city6" },
];


const LocationCityList = ({ close }) => {
    const dispatch = useDispatch();

    function selectCity(city) {
        dispatch(setCity(city));
        dispatch(setRestaurant(''));
        close();
    }

    return (
        <ul className="location_city_list">
            {cityList.map((city) => (
                <li
                    className="location_city_item"
                    key={city.id}
                    onClick={() => selectCity(city.name)}
                >
                    {city.name}
                </li>
            ))}
        </ul>
    )
}

export default LocationCityList;