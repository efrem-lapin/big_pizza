import ProductComposition from "../ProductComposition/ProductComposition";
import ProductModalOptions from "../ProductModalOptions/ProductModalOptions";

const ProductModalPizza = ({item}) => {
  return (
    <>
      <ProductComposition title="Убрать из пиццы:" type="ingredients" items={item.ingredients}/>
      <ProductModalOptions type="pizza" />
      <ProductComposition title="Добавьте в пиццу:" type="extras" />
    </>
  );
};

export default ProductModalPizza;
