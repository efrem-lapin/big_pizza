import React, { memo } from "react";
import IngredientItem from "../IngredientItem/IngredientItem";

import "./Ingredients.scss";


const Ingredients = memo(function ({ type, items = [], callback }) {
  return (
    <ul className="ingredients">
      {items.map(item => <IngredientItem key={item.id} item={item} type={type} callback={callback}/>)}
    </ul>
  );
});

export default Ingredients;