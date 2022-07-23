import React from "react";
import IngredientItem from "../IngredientItem/IngredientItem";

import "./Ingredients.scss";


const Ingredients = ({ method, items = [] }) => {
  return (
    <ul className="ingredients">
      {items.map(item => <IngredientItem key={item.id} item={item} method={method}/>)}
    </ul>
  );
};

export default Ingredients;
