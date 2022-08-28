import InputList from "../InputList/InputList";
import { useDispatch } from "react-redux";
import { setAdress } from "../../store/slices/orderSlice";

const OrderAdress = () => {
  const listInput = [
    {
      label: "Дом",
      type: "text",
      name: "house",
      placeholder: "1а",
      id: "input2",
    },

    {
      label: "Подъезд*",
      type: "text",
      name: "entrance",
      placeholder: "1",
      id: "input3",
    },

    {
      label: "Квартира",
      type: "text",
      name: "flat",
      placeholder: "2",
      id: "input4",
    },

    {
      label: "Этаж",
      type: "text",
      name: "floor",
      placeholder: "3",
      id: "input6",
    },

    {
      label: "Домофон",
      type: "text",
      name: "intercom",
      placeholder: "0000",
      id: "input7",
    },
  ];

  const listOne = [
    {
      label: "Улица*",
      type: "text",
      name: "street",
      placeholder: "Пушкина",
      id: "input1",
    },
  ];

  const dispatch = useDispatch();

  function setValue(name, value) {
    dispatch(setAdress({name, value}));
  }

  return (
    <>
      <div className="form_input_wrapper">
        <InputList items={listOne} callback={setValue} />
      </div>
      <div className="form_input_wrapper">
        <InputList items={listInput} callback={setValue} />
      </div>
    </>
  );
};

export default OrderAdress;
