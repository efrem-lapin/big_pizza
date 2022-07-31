import InputList from "../InputList/InputList";

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
      name: "house",
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
  return (
    <>
      <div className="form_input_wrapper">
        <InputList
          items={[
            {
              label: "Улица*",
              type: "text",
              name: "street",
              placeholder: "Пушкина",
              id: "input1",
            },
          ]}
        />
      </div>
      <div className="form_input_wrapper">
        <InputList items={listInput} />
      </div>
    </>
  );
};

export default OrderAdress;
