import Button from "../UI/Button";

import "./ProductModalFooter.scss";

const ProductModalFooter = ({sum = 0, weight = 0, addProductCart}) => {
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
