import React from "react";
import { addProduct } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ProductModalFooter from "../ProductModalFooter/ProductModalFooter";
import ProductModalHeader from "../ProductModalHeader/ProductModalHeader";
import ProductModalLeft from "../ProductModalLeft/ProductModalLeft";
import PizzaOptions from "../PizzaOptions/PizzaOptions";
import { calcSum, setOptions } from "../../store/prodOptionsSlice";
import { addPopup, removePopup } from "../../store/popupSlice";

import "./ProductModal.scss";
import SushiOptions from "../SushiOptions/SushiOptions";

const ProductModal = ({ item, close }) => {
  const dispatch = useDispatch();
  const orderProduct = useSelector((state) => state.prodOptions);

  React.useEffect(() => {
    dispatch(setOptions(item));
    dispatch(calcSum(orderProduct));
  }, []);

  function addProductCart() {
    // ДОБАЛЯЕМ СОБРАННЫЙ ПРОДУКТ 
    dispatch(addProduct(orderProduct));
    // ДОБАВЛЯЕМ PUPUP В СПИСОК
    dispatch(addPopup({ id: Math.random(), text: "Товар добавлен!" })); 

    // УДАЛЯЕМ PUPUP ИЗ СПИСКА
    setTimeout(() => {
      dispatch(removePopup());
    }, 2000);

    // ЗАКРЫВАЕМ МОДАЛЬНОЕ ОКНО
    close();
  }

  return (
    <>
      <ProductModalLeft label={item.label} img={item.img} />

      <div className="product_right">
        <ProductModalHeader
          labelFire={item.label === "ХИТ"}
          title={item.name}
          descr={item.descr}
        />

        {/* В ЗАВИСИМОСТИ ОТ ТИПА ПРОДУКТА ВЫВОДИМ ОПЦИИ*/}
        {item.type === "pizza" && <PizzaOptions item={item} />}
        {item.type === "sushi" && <SushiOptions />}

        <ProductModalFooter
          weight={400}
          addProductCart={addProductCart}
        />
      </div>
    </>
  );
};

export default ProductModal;
