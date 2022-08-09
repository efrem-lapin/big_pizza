import ProductOptions from "../ProductOptions/ProductOptions";

const PizzaOptions = () => {
  const thickness = [
    { id: "thickness1", value: "Традиционная", name: "thin" },
    { id: "thickness2", value: "Тонкая", name: "thin" },
  ];

  const size = [
    { id: "pizsize1", value: "20 см", name: "size" },
    { id: "pizsize2", value: "28 см", name: "size" },
    { id: "pizsize3", value: "30 см", name: "size" },
  ];

  return (
    <div className="product_options">
      <ProductOptions options={thickness} />
      <ProductOptions options={size} />
    </div>
  );
};

export default PizzaOptions;
