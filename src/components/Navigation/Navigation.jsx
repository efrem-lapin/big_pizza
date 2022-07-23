import React, { useState } from "react";
import DropList from "../DropList/DropList";
import Icon from "../UI/Icon";
import { useSelector } from "react-redux";
import { Link as LinkScroll } from "react-scroll";

import "./Navigation.scss";

const Navigation = ({ categories }) => {
  // SCROLL
  const isScrollHeader = useSelector(
    (state) => state.scrollHeader.isScrollHeader
  );

  const [dropList, setDropList] = useState(false);

  function closeDrop() {
    setDropList(false)
  }

  function toggleDropList(e) {
    e.stopPropagation();
    setDropList((prev) => !prev );
  }

  React.useEffect(() => {
    if(isScrollHeader) {
      setDropList(false);
    }
  }, [isScrollHeader]);
  
  const listOthers = [
    { name: "Акции", id: "drop1", path: "/" },
    { name: "О компании", id: "drop2", path: "/" },
    { name: "Пользовательское соглашение", id: "drop3", path: "/" },
    { name: "Условия гарантии", id: "drop4", path: "/" },
    { name: "Ресторан", id: "drop5", path: "/" },
    { name: "Контакты", id: "drop6", path: "/" },
    { name: "Поддержка", id: "drop7", path: "/" },
    { name: "Отследить заказ", id: "drop8", path: "/" },
  ];

  return (
    <nav className="navigation">
      <ul
        className={
          isScrollHeader ? "navigation_list" : "navigation_list d_none"
        }
      >
        {categories.map((item) => (
          <LinkScroll
            key={item.id}
            to={item.id}
            smooth
            duration={500}
            offset={-80}
            className="category_link"
          >
            <li className="navigation_list_item" key={item.id}>
              {item.title}
            </li>
          </LinkScroll>
        ))}
        <li
          onClick={toggleDropList}
          className="navigation_list_item nav_drop"
        >
          Другое <Icon name="arrow" />
          {dropList && isScrollHeader && <DropList list={listOthers} close={closeDrop}/>}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
