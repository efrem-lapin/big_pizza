import React from "react";
import Category from "../Category/Category";
import CategoriesItems from "../../assets/data/categories.json";

import "./Categories.scss";

const Categories = () => {
  return (
    <div className="container container_categories">
      <ul className="categories">
        {CategoriesItems.map(item => <Category key={item.id} text={item.title} image={item.image} id={item.id}/>)}
      </ul>
    </div>
  );
};

export default Categories;
