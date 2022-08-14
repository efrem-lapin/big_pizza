import Popup from "../Popup/Popup";
import { useSelector } from "react-redux";

import "./PopupList.scss";

const PopupList = () => {
  const items = useSelector(state => state.popup.list);

  return (
    <ul className="popup_list">
      {items.map((item) => (
        <Popup key={item.id} text={item.text}/>
      ))}
    </ul>
  );
};

export default PopupList;
