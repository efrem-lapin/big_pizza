import ExtrasProd from "../ExtrasProd/ExtrasProd";
import ProductComposition from "../ProductComposition/ProductComposition";
import PizzaOptions from "../PizzaOptions/PizzaOptions";

const PizzaModal = ({ingredients}) => {
  return (
    <>
      <ProductComposition title="Убрать из пиццы:" type="ingredients" items={ingredients}/>
      <PizzaOptions />
      <ExtrasProd />
    </>
  );
};

export default PizzaModal;
