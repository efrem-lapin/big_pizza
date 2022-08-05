import Button from "../UI/Button";
import { useSelector } from "react-redux";

import "./ProductModalFooter.scss";

const ProductModalFooter = ({ weight = 0, addProductCart}) => {
  const sum = useSelector((state) => state.prodOptions.sum);
  return (
    <div className="product_footer">
      <div className="total">
        <div className="total_sum">Итого: {sum} ₽</div>
        <div className="total_weight">{weight} г</div>
      </div>
      <Button text="Добавить" click={addProductCart} />
    </div>
  );
};

export default ProductModalFooter;
