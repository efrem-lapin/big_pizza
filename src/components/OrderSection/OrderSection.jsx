const OrderSection = ({ title, children }) => {
  return (
    <div className="order_section">
      <h2 className="form_title">{title}</h2>
      <div className="form_input_wrapper">{children}</div>
    </div>
  );
};

export default OrderSection;
