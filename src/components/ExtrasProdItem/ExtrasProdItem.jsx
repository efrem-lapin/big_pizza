import IngredientsIcons from "../../services/IngredientsIcons";
import { toggleExtras } from "../../store/slices/extrasProdSlice";
import { useDispatch } from "react-redux";

const ExtrasProdItem = ({ item }) => {
  const Icons = new IngredientsIcons();
  const dispatch = useDispatch();

  function toggle() {
    dispatch(toggleExtras(item));
  }

  return (
    <li className="ingredient">
      <label className="ingredient_wrapper">
        <input type="checkbox" name="extras" onClick={toggle} />
        <div className="ingredient_box">
          <div className="ingredient_icon">{Icons.getIcon(item.icon)}</div>
        </div>
        <span className="ingredient_name">{item.title}</span>
        <span className="ingredient_price">{item.price} ₽</span>
      </label>
    </li>
  );
};

export default ExtrasProdItem;
