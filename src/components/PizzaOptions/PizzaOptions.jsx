import ProductOptions from "../ProductOptions/ProductOptions";

const PizzaOptions = () => {
  const thickness = [
    { id: "thickess1", title: "Традиционная" },
    { id: "thickness2", title: "Тонкая" },
  ];

  const size = [
    { id: "size1", title: "20 см" },
    { id: "tsize2", title: "28 см" },
    { id: "tsize3", title: "30 см" },
  ];

  return (
    <div className="product_options">
      <ProductOptions options={thickness} />
      <ProductOptions options={size} />
    </div>
  );
};

export default PizzaOptions;
