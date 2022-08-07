import Ingredients from "../Ingredients/Ingredients";

import "./ProductComposition.scss";

const ProductComposition = ({ title, type, callback, items }) => {
  return (
    <div className="product_composition">
      <div className="product_composition_title">{title}</div>
      <Ingredients type={type} items={items} callback={callback} />
    </div>
  );
};

export default ProductComposition;
