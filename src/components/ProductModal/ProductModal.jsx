import React, { useState } from "react";
import Ingredients from "../Ingredients/Ingredients";
import ProductOptions from "../ProductOptions/ProductOptions";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import Icon from "../UI/Icon";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux/es/exports";
import { setIsCart } from "../../redux/cartSlice";

import "./ProductModal.scss";

const ProductModal = ({ item, close }) => {
  const dispatch = useDispatch();
  const [orderProduct, setOrderProduct] = useState({ ...item });
  const addIngredients = [
    { icon: "cheese", name: "Больше сыра", price: 99, id: "addIng1" },
    { icon: "sauce", name: "Томатный соус", price: 40, id: "addIng2" },
  ];

  const options = {
    pizza: [
      [
        {
          id: "thickess1",
          name: "thickness",
          value: "tradicional",
          label: "Традиционная",
          checked: true,
        },
        {
          id: "thickness2",
          name: "thickness",
          value: "thin",
          label: "Тонкая",
        },
      ],

      [
        {
          id: "size1",
          name: "tsize",
          value: "20",
          label: "20 см",
          checked: true,
        },
        {
          id: "tsize2",
          name: "tsize",
          value: "28",
          label: "28 см",
        },
        {
          id: "tsize3",
          name: "tsize",
          value: "30",
          label: "30 см",
        },
      ],
    ],

    sushi: [
      [
        {
          id: "sushiCount1",
          name: "sushiSize",
          value: "small",
          label: "8шт",
          checked: true,
        },

        {
          id: "sushiCount2",
          name: "sushiSize",
          value: "big",
          label: "16шт",
          checked: false,
        },
      ],
    ],
  };
  function addProductCart(orderProduct) {
    dispatch(addProduct(orderProduct));
    dispatch(setIsCart(true));
    close();
  }

  function removeIngredients() {
    setOrderProduct({ ...orderProduct, ...orderProduct.ingredient.filter(item => item.checked) });
  }

  return (
    <>
      {item.label ? <div className="product_label">{item.label}</div> : null}
      <div className="product_left">
        <img className="product_modal_img" src={item.img} alt="product" />
      </div>
      <div className="product_right">
        <div className="product_header">
          <div className="product_title_wrapper">
            {item.label ? <Icon name="fire" /> : null}
            <h2 className="product_title">{item.name}</h2>
          </div>
          <div className="product_info_btn">
            <Icon name="info" />
          </div>
        </div>
        <div className="product_descr_modal">{item.descr}</div>
        <div className="product_ingredients">
        <div className="add_remove_title">Убрать из пиццы:</div>
          <Ingredients
            method="remove"
            items={item.ingredients}
            removeIngredients
          />
        </div>
        <div className="product_options">
          {item.type && (
            options[item.type].map((option) => (
              <ProductOptions key={option[0].id} items={option} />
            ))
          )}
        </div>
        {item.ingredients ? (
          <div className="ingredients_adder">
            <div className="add_remove_title">Добавьте в пиццу:</div>
            <Ingredients method="add" items={addIngredients} />
          </div>
        ) : null}
        <div className="product_footer">
          <div className="total">
            <div className="total_sum">Итого: 9999 ₽</div>
            <div className="total_weight">400 г</div>
          </div>
          <Button text="Добавить" click={() => addProductCart(orderProduct)} />
        </div>
      </div>
    </>
  );
};

export default ProductModal;
