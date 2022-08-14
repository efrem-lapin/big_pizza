import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../store/slices/cartSlice";

import "./ProductModalFooter.scss";

const ProductModalFooter = ({item, close}) => {
  const dispatch = useDispatch();
  const extras = useSelector(state => state.extrasProd.list);
  const extrasSum = useSelector(state => state.extrasProd.sum);
  const ingredients = useSelector(state => state.ingredientsProd.list) || null;
  const options = useSelector(state => state.prodOptions.list);
  const optionsSum = useSelector((state) => state.prodOptions.sum);
  

  const sum = extrasSum + optionsSum;

  function addProdCart() {
    const product = {
      ...item,
      extras,
      ingredients,
      options,
      sum,
    };

    dispatch(addProduct(product));
    close();
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
