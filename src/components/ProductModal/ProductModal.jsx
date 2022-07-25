import React, { useState } from "react";
import { addProduct, setIsCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux/es/exports";
import ProductModalFooter from "../ProductModalFooter/ProductModalFooter";
import ProductModalOptions from "../ProductModalOptions/ProductModalOptions";
import ProductModalHeader from "../ProductModalHeader/ProductModalHeader";
import ProductModalLeft from "../ProductModalLeft/ProductModalLeft";
import ProductComposition from "../ProductComposition/ProductComposition";

import "./ProductModal.scss";


const ProductModal = ({ item, close }) => {
  const dispatch = useDispatch();

  const [orderProduct, setOrderProduct] = useState({
    ...item,
    pizzasize: "20",
    thickness: "tradicional",
    extras: [],
    count: 1,
  });

  function toggleIngredient(item, method, type) {
    if (method === "add") {
      let list = orderProduct[type];
      list.push(item);
      setOrderProduct({
        ...orderProduct,
        [type]: list,
      });
    } else {
      setOrderProduct({
        ...orderProduct,
        [type]: orderProduct[type].filter((i) => i.id !== item.id),
      });
    }
  }

  function getValue(name, value) {
    setOrderProduct({ ...orderProduct, [name]: value });
  }

  function calcSum() {
    let comSum = 0;

    if (orderProduct.extras) {
      comSum += orderProduct.extras.reduce(
        (i, item) => item.price + i,
        orderProduct.price
      );
    }

    if (orderProduct.thickness === "thin") {
      comSum -= Math.round(comSum * 0.1); // sum = sum - 10%
    }

    switch (orderProduct.pizzasize) {
      case "28":
        comSum += Math.round(comSum * 0.1); // sum = sum + 10%
        break;
      case "30":
        comSum += Math.round(comSum * 0.15); // sum = sum + 15%
        break;
    }
    return comSum;
  }

  const sum = React.useMemo(calcSum, [orderProduct]);

  function addProductCart() {
    setOrderProduct({ ...orderProduct, sum: 10 });
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
          callback={getValue}
        />

        <ProductModalOptions type={item.type} getValue={getValue} />

        {item.ingredients && (
          <ProductComposition
          title="Добавьте в пиццу:"
          type="extras"
          callback={toggleIngredient}
        />
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