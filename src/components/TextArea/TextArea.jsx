import "./TextArea.scss";

const TextArea = ({ title, placeholder }) => {
  return (
    <div className="textarea_wrapper">
      <p className="textarea_title">{title}</p>
      <textarea
        name="comment"
        className="textarea_box"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
