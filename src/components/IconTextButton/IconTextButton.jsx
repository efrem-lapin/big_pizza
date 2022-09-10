import Icon from "../UI/Icon";

import "./IconTextButton.scss";

const IconTextButton = ({ icon, text, click }) => {
  return (
    <div className="icon_text_button" onClick={click}>
      <Icon name={icon} />
      {text}
    </div>
  );
};

export default IconTextButton;
