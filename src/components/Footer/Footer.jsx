import React from "react";
import Logo from "../Logo/Logo";
import FooterNav from "../FooterNav/FooterNav";
import ContactsList from "../ContactsList/ContactsList";

import "./Footer.scss";

const Footer = () => {
  const listFirst = [
    { title: "О компании", path: "/info", id: "flist1" },
    { title: "Пользовательское соглашение", path: "/", id: "flist2" },
    { title: "Условия гарантии", path: "/", id: "flist3" },
  ];

  const listSecond = [
    { title: "Ресторан", path: "/", id: "flist4" },
    { title: "Контакты", path: "/", id: "flist5" },
    { title: "Поддержка", path: "/", id: "flist1" },
  ];

  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_inner">
          <ul className="footer_list">
            <div className="footer_box sb">
              <Logo />
              <span className="copyright">© Copyright 2021 — BIG Пицца</span>
            </div>
            <FooterNav title="BIG Пицца" items={listFirst} />
            <FooterNav title="Помощь" items={listSecond} />
            <ContactsList />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
