import React from "react";
import Logo from "../Logo/Logo";
import FooterNav from "../FooterNav/FooterNav";
import ContactsList from "../ContactsList/ContactsList";

import "./Footer.scss";

const Footer = () => {
  const listFirst = [
    { title: "О компании", path: "", id: "flist1" },
    { title: "Пользовательское соглашение", path: "", id: "flist2" },
    { title: "Условия гарантии", path: "", id: "flist3" },
  ];

  const listSecond = [
    { title: "Ресторан", path: "", id: "flist4" },
    { title: "Контакты", path: "", id: "flist5" },
    { title: "Поддержка", path: "", id: "flist1" },
    { title: "Отследить заказ", path: "", id: "flist6" },
  ];

  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_inner">
          <ul className="footer_list">
            <div className="footer_box sb">
              <Logo />
              <span className="copyright">© Copyright 2021 — Куда Пицца</span>
            </div>
            <FooterNav title="Куда Пицца" items={listFirst} />
            <FooterNav title="Помощь" items={listSecond} />
            <ContactsList />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;