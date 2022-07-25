import React from "react";
import Drawer from "../../components/Drawer/Drawer";
import CartContent from "../../components/CartContent/CartContent";
import Modal from "../../components/Modal/Modal";
import { setIsCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "../../components/SignUp/SignUp";
import { setSign } from "../../store/signSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const isCart = useSelector((state) => state.cart.isCart);
  const isSign = useSelector((state) => state.sign.isSign);

  function closeSingUp() {
    dispatch(setSign(false));
  }

  return (
    <>
      {isCart ? (
        <Drawer
          title="Ваш заказ"
          type="cart"
          closeCallback={() => dispatch(setIsCart(false))}
        >
          <CartContent />
        </Drawer>
      ) : null}
      {isSign && (
        <Modal close={closeSingUp}>
          <SignUp close={closeSingUp} />
        </Modal>
      )}
    </>
  );
};

export default Cart;
