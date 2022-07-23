import React from "react";
import Category from "../Category/Category";

import "./Categories.scss";

const Categories = ({ items = [] }) => {
  return (
    <div className="container container_categories">
      <ul className="categories">
        {items.map(item => <Category key={item.id} text={item.title} image={item.image} id={item.id}/>)}
      </ul>
    </div>
  );
};

export default Categories;
