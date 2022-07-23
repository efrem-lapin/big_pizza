import React, { useState } from "react";
import Overlay from "../Overlay/Overlay";
import Icon from "../UI/Icon";
import { setIsModal } from "../../redux/modalSlice";
import { useDispatch } from "react-redux/es/exports";

import "./Modal.scss";

const Modal = ({ children, close, addClass = "" }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const timer = (React.useRef().current = () => {
    setTimeout(() => {
      dispatch(setIsModal(false));
      close();
    }, 300);
  });

  const modalRef = React.useRef();

  function closeModal() {
    setOpen(false);
    timer();
  }

  return (
    <Overlay closeDrawer={closeModal}>
      <div
        className={
          open ? "modal_wrapper  modal_active" : "modal_wrapper modal_deactive"
        }
      >
        <div
          className={`modal_window ${addClass}`}
          ref={(ref) => (modalRef.current = ref)}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
        <div className="modal_close" onClick={closeModal}>
          <Icon name="cross" />
        </div>
      </div>
    </Overlay>
  );
};

export default Modal;
