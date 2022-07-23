import React, {useState} from "react";

import "./Overlay.scss";

const Overlay = ({ closeDrawer, children }) => {
  const [isClose, setIsClose] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const ovrl = React.useRef();

  React.useEffect(() => {
    document.body.classList.add('hidden_scroll');
    ovrl.current.addEventListener('scroll', (e) => {
      setScrollTop(ovrl.current.scrollTop);
     })

    return () => {
      document.body.classList.remove('hidden_scroll');
    }
  }, []);

  return <div ref={ref => ovrl.current = ref} className={isClose ? "overlay overlay_close" : "overlay"} onClick={closeDrawer}>{children}</div>;
};

export default Overlay;
