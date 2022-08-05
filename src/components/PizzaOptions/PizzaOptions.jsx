import ProductComposition from "../ProductComposition/ProductComposition";
import ProductModalOptions from "../ProductModalOptions/ProductModalOptions";

const ProductModalPizza = ({ingredients}) => {
  return (
    <>
      <ProductComposition title="Убрать из пиццы:" type="ingredients" items={ingredients}/>
      <ProductModalOptions type="pizza" />
      <ProductComposition title="Добавьте в пиццу:" type="extras" />
    </>
  );
};

export default ProductModalPizza;
