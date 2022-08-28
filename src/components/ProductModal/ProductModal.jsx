import React from "react";
import { useDispatch } from "react-redux/es/exports";
import ProductModalFooter from "../ProductModalFooter/ProductModalFooter";
import ProductModalHeader from "../ProductModalHeader/ProductModalHeader";
import ProductModalLeft from "../ProductModalLeft/ProductModalLeft";
import PizzaOptions from "../PizzaModal/PizzaModal";
import { setOptionsProd } from "../../store/slices/prodOptionsSlice";
import SushiOptions from "../SushiOptions/SushiOptions";

import "./ProductModal.scss";


const ProductModal = ({ item, close }) => {
  const dispatch = useDispatch();
  dispatch(setOptionsProd({type: item.type}));

  return (
    <>
      <ProductModalLeft label={item.label} img={item.img} />

      <div className="product_right">
        <ProductModalHeader
          labelFire={item.label && item.label.toUpperCase() === "ХИТ"}
          title={item.name}
          descr={item.descr}
        />

        {/* В ЗАВИСИМОСТИ ОТ ТИПА ПРОДУКТА ВЫВОДИМ ОПЦИИ */}
        {item.type === "pizza" && (
          <PizzaOptions ingredients={item.ingredients} />
        )}
        {item.type === "sushi" && <SushiOptions />}

        <ProductModalFooter item={item} close={close} />
      </div>
    </>
  );
};

export default ProductModal;
