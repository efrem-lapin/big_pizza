import React, { Fragment } from "react";
import { addProduct } from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ProductModalFooter from "../ProductModalFooter/ProductModalFooter";
import ProductModalHeader from "../ProductModalHeader/ProductModalHeader";
import ProductModalLeft from "../ProductModalLeft/ProductModalLeft";
import PizzaOptions from "../PizzaModal/PizzaModal";
import { calcSum, setOptions } from "../../store/slices/prodOptionsSlice";
import { addPopup, removePopup } from "../../store/slices/popupSlice";


import "./ProductModal.scss";
import SushiOptions from "../SushiOptions/SushiOptions";
import { useState } from "react";

const ProductModal = ({ item, close }) => {
  const dispatch = useDispatch();
  const [currProd, setCurrProd] = useState();
  const [scrollTop, setScrollTop] = useState(0);
  const productOptions = useSelector((state) => state.prodOptions);
  const wrapRef = React.useRef();

  React.useEffect(() => {
    const prod = { id: item.id, price: item.price, name: item.name, descr: item.descr };
    dispatch(setOptions(item)); // добавляем в опции основной id товара
    // dispatch(calcSum(orderProduct));     // высчитываем сумму товара и опций
  }, []);

  function addProductCart() {
    // ДОБАЛЯЕМ СОБРАННЫЙ ПРОДУКТ
    // dispatch(addProduct(orderProduct));
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
          labelFire={item.label && item.label.toUpperCase() === "ХИТ"}
          title={item.name}
          descr={item.descr}
        />

        {/* В ЗАВИСИМОСТИ ОТ ТИПА ПРОДУКТА ВЫВОДИМ ОПЦИИ*/}
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
