import { Link as LinkScroll } from "react-scroll";

import "./LinkToScroll.scss";

const LinkToScroll = ({to, text}) => {
  return (
    <LinkScroll to={to} smooth duration={500} offset={-120}>
      <span className="link_to_scroll">{text}</span>
    </LinkScroll>
  );
};

export default LinkToScroll;
