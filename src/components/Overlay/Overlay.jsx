import React, { useState } from "react";

import "./Overlay.scss";

const Overlay = ({ closeDrawer, prodModal, children }) => {
  const [isClose, setIsClose] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const ovrl = React.useRef();

  React.useEffect(() => {
    document.body.classList.add("hidden_scroll");

    function setScroll() {
      setScrollTop(ovrl.current.scrollTop);
    }

    function checkScroll() {
      if (ovrl.current.scrollTop <= 0) closeDrawer();
    }

    if (prodModal) {
      ovrl.current.addEventListener("scroll", setScroll);
      ovrl.current.addEventListener("touchend", checkScroll);
    }

    return () => {
      document.body.classList.remove("hidden_scroll");
      
      // if (prodModal) {
      //   ovrl.current.removeEventListener("scroll", scrollTop);
      //   ovrl.current.removeEventListener("touchend", checkScroll);
      // }
    };
  }, []);

  return (
    <div
      ref={(ref) => (ovrl.current = ref)}
      className={isClose ? "overlay overlay_close" : "overlay"}
      onClick={closeDrawer}
    >
      {children}
    </div>
  );
};

export default Overlay;
