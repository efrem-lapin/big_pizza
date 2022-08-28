import InputLabel from "../UI/InputLabel";

const InputList = ({ items, callback = null }) => {
  return (
    <ul className="form_input_wrapper">
      {items.map((item) => (
        <li key={item.id}>
          <InputLabel {...item} callback={callback}/>
        </li>
      ))}
    </ul>
  );
};

export default InputList;
