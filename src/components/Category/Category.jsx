import React from "react";
import CategoriesImages from "../../services/CategoriesImages";
import {Link as LinkScroll} from "react-scroll";

import "./Category.scss";

const Category = ({ text, image, id }) => {
  const images = new CategoriesImages();
  return (
    <LinkScroll to={id} smooth duration={500} offset={-80} className="category_link">
      <li className="category">
        <div className="category_img">{images.getImage(image)}</div>
        <span className="category_title">{text}</span>
      </li>
    </LinkScroll>
  );
};

export default Category;
