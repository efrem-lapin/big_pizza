import React from "react";
import { Link } from "react-router-dom";

import "./Menu.scss";

const Menu = () => {
  const menuItems = [
    { title: "Акции", id: "drop1", path: "/" },
    { title: "О компании", id: "drop2", path: "/" },
    { title: "Пользовательское соглашение", id: "drop3", path: "/" },
    { title: "Условия гарантии", id: "drop4", path: "/" },
    { title: "Ресторан", id: "drop5", path: "/" },
    { title: "Контакты", id: "drop6", path: "/" },
    { title: "Поддержка", id: "drop7", path: "/" },
    { title: "Отследить заказ", id: "drop8", path: "/" },
  ];
  return (
    <ul className="menu_list">
      {menuItems.map((item) => (
        <Link to={item.path} key={item.id}>
          <li className="menu_item">
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
