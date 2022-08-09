import ProductOptions from "../ProductOptions/ProductOptions";

const SushiOptions = () => {
  const size = [
    { id: "suhsize1", value: "8 шт", name: "size" },
    { id: "suhsize2", value: "16 шт", name: "size" },
  ];

  return <ProductOptions options={size}/>;
};

export default SushiOptions;
