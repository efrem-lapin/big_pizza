import React from "react";
import { Link } from "react-router-dom";

import "./DropList.scss";

const DropList = (props) => {
  const [deactive, setDeactive] = React.useState(false);

  function clickOutDrop() {
    setDeactive(true);
    setTimeout(() => {
      props.close();
    }, 450);
  }

  React.useEffect(() => {
    document.body.addEventListener("click", clickOutDrop);
    return () => {
      document.body.removeEventListener("click", clickOutDrop);
    };
  }, []);

  return (
    <div
      className={
        deactive
          ? "drop_list_wrapper deactive_drop"
          : "drop_list_wrapper active_drop"
      }
      onClick={(e) => e.stopPropagation()}
    >
      {props.list.map((item) => {
        return (
          <div className="drop_list_item" key={item.id}>
            <Link className="drop_list_link" to={item.path}>
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DropList;
