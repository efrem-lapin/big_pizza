import React from "react";

const FooterContacts = () => {
  return (
    <div className="footer_box">
      <h3 className="footer_title">Контакты</h3>
      <ul className="footer_list_inner">
        <li className="footer_list_inner_item">
          <Icon name="phone" />
          "+7 (926) 223-10-11"
        </li>
        <li className="footer_list_inner_item"></li>
        <li className="footer_list_item">
          <ul className="social_list">
            <li className="social_item"></li>
            <li className="social_item"></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FooterContacts;
