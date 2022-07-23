import React from "react";
import Icon from "../UI/Icon";

import "./ContactsList.scss";

const ContactsList = () => {
  return (
    <div className="contacts_list_wrapper">
      <div className="contacts_list_title">Контакты</div>
      <ul className="contacts_list">
        <li className="contacts_item">
          <Icon name="phone" />
          <a className="contacts_link" href="tel:89262231011">
            +7 (926) 223-10-11
          </a>
        </li>
        <li className="contacts_item">
          <Icon name="marker" />
          <a className="contacts_link" href="local:89262231011">
            Москва, ул. Юных Ленинцев, д.99
          </a>
        </li>
        <li className="contacts_item">
          <span>
            <Icon name="facebook" />
            <a className="contacts_link" href="facebook.com">
              Facebook
            </a>
          </span>
          <span>
            <Icon name="instagram" />
            <a className="contacts_link" href="instagram.com">
              Instagram
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ContactsList;
