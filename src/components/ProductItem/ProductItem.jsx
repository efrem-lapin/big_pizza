import React, { useState } from "react";
import Button from "../UI/Button";
import ProductModal from "../ProductModal/ProductModal";
import Modal from "../Modal/Modal";
import Label from "../Label/Label";

import "./ProductItem.scss";


const ProductItem = ({ item }) => {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false)
  }

  const label = item.keywords && item.keywords.find(item => item === "Хит");

  return (
    <div className="wrapper">
      {modal && <Modal addClass="modal_product" close={closeModal} prodModal><ProductModal item={item} close={closeModal}/></Modal>}
      <li className="product_item" onClick={openModal}>
        {label ? <Label text={label}/> : null}
        <div className="product_wrapper_img">
          <img src={item.image} alt={item.type + " image"} className="product_img" />
        </div>
        <div className="product_info">
          <div className="product_text">
            <h4 className="product_title">{item.title}</h4>
            {item.description ? <p className="product_descr">{item.description}</p> : null}
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
