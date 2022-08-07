import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../store/slices/cartSlice";

import "./ProductModalFooter.scss";

const ProductModalFooter = ({item}) => {
  const dispatch = useDispatch();
  const extras = useSelector(state => state.extrasProd.list);
  const extrasSum = useSelector(state => state.extrasProd.sum);
  const ingredients = useSelector(state => state.ingredientsProd.list);
  // const size = useSelector(state => state.sizeProd.list);
  // const sizeSum = useSelector((state) => state.prodOptions.sum);

  const sum = extrasSum; // + sizeSum

  function addProdCart() {
    const product = {
      ...item,
      extras,
      ingredients,
      sum
    };

    dispatch(addProdCart(product));
  }

  return (
    <div className="product_footer">
      <div className="total">
        <div className="total_sum">Итого: {sum} ₽</div>
        <div className="total_weight">{0} г</div>
      </div>
      <Button text="Добавить" click={addProdCart} />
    </div>
  );
};

export default ProductModalFooter;
