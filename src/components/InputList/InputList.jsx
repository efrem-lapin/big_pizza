import InputLabel from "../UI/InputLabel";

const InputList = ({ items }) => {
  return (
    <ul className="form_input_wrapper">
      {items.map((item) => (
        <li key={item.id}>
          <InputLabel {...item}/>
        </li>
      ))}
    </ul>
  );
};

export default InputList;
