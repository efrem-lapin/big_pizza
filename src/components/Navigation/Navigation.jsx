import React, { useState } from "react";
import DropList from "../DropList/DropList";
import Icon from "../UI/Icon";
import { Link as LinkScroll } from "react-scroll";

import NavDropList from "../../assets/data/navDropList.json";
import CategoriesItems from "../../assets/data/categories.json";

import "./Navigation.scss";

const Navigation = () => {
  const [dropList, setDropList] = useState(false);

  function closeDrop() {
    setDropList(false)
  }

  function toggleDropList(e) {
    e.stopPropagation();
    setDropList((prev) => !prev );
  }

  return (
    <nav className="navigation">
      <ul className="navigation_list" >
        {CategoriesItems.map((item) => (
          <LinkScroll
            key={item.id}
            to={item.id}
            smooth
            duration={500}
            offset={-80}
            className="category_link"
          >
            <li className="navigation_list_item" key={item.id}>{item.title}</li>
          </LinkScroll>
        ))}
        <li onClick={toggleDropList} className="navigation_list_item nav_drop">
          Другое <Icon name="arrow" />
          {dropList && <DropList list={NavDropList} close={closeDrop}/>}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
