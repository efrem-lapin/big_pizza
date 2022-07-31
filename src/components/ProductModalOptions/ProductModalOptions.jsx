import ProductOptions from "../ProductOptions/ProductOptions";

const ProductModalOptions = ({ type, getValue = null }) => {
  const options = {
    pizza: [
      [
        {
          id: "thickess1",
          name: "thickness",
          value: "tradicional",
          label: "Традиционная",
          checked: true,
        },
        {
          id: "thickness2",
          name: "thickness",
          value: "thin",
          label: "Тонкая",
        },
      ],

      [
        {
          id: "size1",
          name: "pizzasize",
          value: "20",
          label: "20 см",
          checked: true,
        },
        {
          id: "tsize2",
          name: "pizzasize",
          value: "28",
          label: "28 см",
        },
        {
          id: "tsize3",
          name: "pizzasize",
          value: "30",
          label: "30 см",
        },
      ],
    ],

    sushi: [
      [
        {
          id: "sushiCount1",
          name: "sushisize",
          value: "small",
          label: "8шт",
          checked: true,
        },

        {
          id: "sushiCount2",
          name: "sushisize",
          value: "big",
          label: "16шт",
          checked: false,
        },
      ],
    ],
  };

  return (
    <div className="product_options">
      {type && options[type].map((option) => (
        <ProductOptions key={option[0].id} items={option} getValue={getValue} />
      ))}
    </div>
  );
};

export default ProductModalOptions;
