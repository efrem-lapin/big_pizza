import React, {useState} from "react";
import Button from "../UI/Button";
import ProductModal from "../ProductModal/ProductModal";

import "./ProductItem.scss";
import Modal from "../Modal/Modal";
import Label from "../Label/Label";

const ProductItem = ({ item }) => {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false)
  }

  return (
    <div className="wrapper">
      {modal && <Modal addClass="modal_product" close={closeModal}><ProductModal item={item} close={closeModal}/></Modal>}
      <li className="product_item" onClick={openModal}>
        {item.label ? <Label text={item.label}/> : null}
        <div className="product_wrapper_img">
          <img src={item.img} alt={item.path} className="product_img" />
        </div>
        <div className="product_info">
          <div className="product_text">
            <h4 className="product_title">{item.name}</h4>
            {item.descr ? <p className="product_descr">{item.descr}</p> : null}
          </div>
          <div className="price_info">
            <Button text="Выбрать" />
            <span className="price">от {item.price} ₽</span>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ProductItem;
