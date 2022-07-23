import React from "react";

import "./PosterItem.scss";

const PostersItem = ({ image }) => {
  return (
      <li className="posters_item" style={{ backgroundImage: `url(${image})`}}>
      </li>
  );
};

export default PostersItem;
