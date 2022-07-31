import Selector from "../Selector/Selector";

const OrderTime = () => {
  return (
    <div className="dev_time">
      <Selector text="Дата" icon="arrow" type="calendar" />
      <Selector text="Время" icon="arrow" type="timerange" />
    </div>
  );
};

export default OrderTime;
