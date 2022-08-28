import Selector from "../Selector/Selector";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../store/slices/orderSlice";

const OrderTime = () => {
  const dispatch= useDispatch();
  const day = useSelector(state => state.order.time.day);
  const time = useSelector(state => state.order.time.timeRange);

  function setValue(name, value) {
    dispatch(setTime({name, value}))
  }
  return (
    <div className="dev_time">
      <Selector text={ day || "Дата" } active={day} icon="arrow" type="calendar" callback={setValue}/>
      <Selector text={ time || "Время" } active={time} icon="arrow" type="timerange" callback={setValue}/>
    </div>
  );
};

export default OrderTime;
