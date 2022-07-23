import React from "react";
import Icon from "../UI/Icon";
import IngredientsIcons from "../../services/IngredientsIcons";

const IngredientItem = ({ item, method }) => {
  const Icons = new IngredientsIcons();
  const methods = {
    remove: "crossIngredient",
    add: "doneIngredient",
  };

  return (
    <li className="ingredient" >
      <label className="ingredient_wrapper">
        <input type="checkbox" name="ingredients" defaultChecked={method === "remove"}/>
        <div className="ingredient_box">
          {method === "remove" ? <div className="btn_ingredient">
            <Icon name={methods[method]} />
          </div> : null}
          <div className="ingredient_icon">{Icons.getIcon(item.icon)}</div>
        </div>
        <span className="ingredient_name">{item.name}</span>
        {method === "add" ? (
          <span className="ingredient_price">{item.price} ₽</span>
        ) : null}
      </label>
    </li>
  );
};

export default IngredientItem;
