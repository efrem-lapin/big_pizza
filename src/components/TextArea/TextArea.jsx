import { useDispatch } from "react-redux";
import { setOptions } from "../../store/slices/orderSlice";

import "./TextArea.scss";

const TextArea = ({ title, placeholder }) => {
  const dispatch = useDispatch();

  function setComment(e) {
    dispatch(setOptions({comment: e.target.value}));
  }

  return (
    <div className="textarea_wrapper">
      <p className="textarea_title">{title}</p>
      <textarea
        name="comment"
        className="textarea_box"
        placeholder={placeholder}
        onChange={setComment}
      ></textarea>
    </div>
  );
};

export default TextArea;
