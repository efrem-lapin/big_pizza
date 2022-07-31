import React, { useState } from "react";
import { addProduct, setIsCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ProductModalFooter from "../ProductModalFooter/ProductModalFooter";
import ProductModalOptions from "../ProductModalOptions/ProductModalOptions";
import ProductModalHeader from "../ProductModalHeader/ProductModalHeader";
import ProductModalLeft from "../ProductModalLeft/ProductModalLeft";
import ProductComposition from "../ProductComposition/ProductComposition";
import { calcSum, setOptions, resetOptions } from "../../store/prodOptionsSlice";

import "./ProductModal.scss";

const ProductModal = ({ item, close }) => {
  const dispatch = useDispatch();
  const sum = useSelector((state) => state.prodOptions.sum);
  const orderProduct = useSelector((state) => state.prodOptions);

  React.useEffect(() => {
    let options = {};
    if (item.type === "pizza") {
      options = { thickness: "tradicional", pizzasize: "20" };
    } else {
      options = { sushisize: "small" };
    }
    dispatch(setOptions({ ...item, ...options }));

    dispatch(calcSum(orderProduct));
  }, []);

  function addProductCart() {
    dispatch(addProduct(orderProduct));
    dispatch(setIsCart(true));
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

        <ProductComposition
          title="Убрать из пиццы:"
          type="ingredients"
          items={item.ingredients}
        />

        <ProductModalOptions type={item.type} />

        {item.ingredients && (
          <ProductComposition title="Добавьте в пиццу:" type="extras" />
        )}

        <ProductModalFooter
          sum={sum}
          weight={400}
          addProductCart={addProductCart}
        />
      </div>
    </>
  );
};

export default ProductModal;
