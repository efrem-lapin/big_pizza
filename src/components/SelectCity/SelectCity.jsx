import React from "react";
import { useSelector } from "react-redux";
import LocationCityList from "../LocationCityList/LocationCityList";

const SelectCity = () => {
    const currCity = useSelector(state => state.city.city);
    const [selectCity, setSelectCity] = React.useState(false);

    function toggleSecetList() {
        setSelectCity(prev => !prev);
    }

    return(
        <div className="city_select">
        <div className="city_select_text" onClick={toggleSecetList}>Изменить город: {currCity}</div>
        {selectCity && <LocationCityList close={() => setSelectCity(false)}/>}
        </div>
    )
}

export default SelectCity;