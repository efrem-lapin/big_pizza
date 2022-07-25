import React from "react";
import Icon from "../UI/Icon";
import IngredientsIcons from "../../services/IngredientsIcons";

const IngredientItem = ({ item, type, callback }) => {
  const Icons = new IngredientsIcons();
  const types = {
    ingredients: "crossIngredient",
    extras: "doneIngredient",
  };

  function setValue(e) {
    if (e.target.checked) callback(item, "add", type);
    else callback(item, "remove", type);
  }

  return (
    <li className="ingredient" >
      <label className="ingredient_wrapper">
        <input type="checkbox" name="ingredients" defaultChecked={type === "ingredients"} onClick={setValue}/>
        <div className="ingredient_box">
          {type === "ingredients" ? <div className="btn_ingredient">
            <Icon name={types[type]} />
          </div> : null}
          <div className="ingredient_icon">{Icons.getIcon(item.icon)}</div>
        </div>
        <span className="ingredient_name">{item.name}</span>
        {type === "extras" ? (
          <span className="ingredient_price">{item.price} ₽</span>
        ) : null}
      </label>
    </li>
  );
};

export default IngredientItem;
