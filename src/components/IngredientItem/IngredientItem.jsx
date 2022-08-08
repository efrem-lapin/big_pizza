import React from "react";
import Icon from "../UI/Icon";
import IngredientsIcons from "../../services/IngredientsIcons";
import { useDispatch } from "react-redux/es/exports";
import { toggleIngredient, initIngredient } from "../../store/slices/ingredientsProdSlice";

const IngredientItem = ({ item }) => {
  const Icons = new IngredientsIcons();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initIngredient(item));
  }, [])

  function toggle() {
    dispatch(toggleIngredient(item));
  }

  return (
    <li className="ingredient">
      <label className="ingredient_wrapper">
        <input
          type="checkbox"
          name="ingredients"
          defaultChecked
          onClick={toggle}
        />
        <div className="ingredient_box">
            <div className="btn_ingredient">
              <Icon name="ingredients" />
            </div>
          <div className="ingredient_icon">{Icons.getIcon(item.icon)}</div>
        </div>
        <span className="ingredient_name">{item.name}</span>
      </label>
    </li>
  );
};

export default IngredientItem;
