import Ingredients from "../Ingredients/Ingredients";

import "./ProductComposition.scss";

const ProductComposition = ({ title, type, callback, items }) => {
  if (type === "extras") {
    items = [
      { icon: "cheese", name: "Больше сыра", price: 99, id: "addIng1" },
      { icon: "sauce", name: "Томатный соус", price: 40, id: "addIng2" },
    ];
  }
  return (
    <div className="product_composition">
      <div className="product_composition_title">{title}</div>
      <Ingredients type={type} items={items} callback={callback} />
    </div>
  );
};

export default ProductComposition;
