import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../store/slices/cartSlice";
import { resetExtras } from "../../store/slices/extrasProdSlice";
import { resetIngredients } from "../../store/slices/ingredientsProdSlice";
import { resetOptions } from "../../store/slices/prodOptionsSlice";
import { addPopup, removePopup } from "../../store/slices/popupSlice";

import "./ProductModalFooter.scss";

const ProductModalFooter = ({item, close}) => {
  const dispatch = useDispatch();
  const extras = useSelector(state => state.extrasProd.list);
  const extrasSum = useSelector(state => state.extrasProd.sum);
  const ingredients = useSelector(state => state.ingredientsProd.list) || null;
  const options = useSelector(state => state.prodOptions);
  const optionsRatio = useSelector((state) => state.prodOptions.ratio);

  const sum = extrasSum + Math.round(item.price * optionsRatio);

  function addProdCart() {
    const product = {
      ...item,
      extras,
      ingredients,
      options,
      sum,
    };

    dispatch(addProduct(product));
    dispatch(resetExtras());
    dispatch(resetIngredients());
    dispatch(resetOptions());
    close();

    dispatch(addPopup({ id: Math.random(), text: "Товар добавлен!" }));

    // УДАЛЯЕМ PUPUP ИЗ СПИСКА
    setTimeout(() => {
      dispatch(removePopup());
    }, 2000);
  }

  return (
    <div className="product_footer">
      <div className="total">
        <div className="total_sum">Итого: {sum} ₽</div>
        {item.weigth && <div className="total_weight">{item.weigth} г</div>}
      </div>
      <Button text="Добавить" click={addProdCart} />
    </div>
  );
};

export default ProductModalFooter;
