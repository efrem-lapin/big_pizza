import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ items }) => {
  return (
    <ul className="product_list">
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ProductList;