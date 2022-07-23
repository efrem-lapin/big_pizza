import "./OrderInfo.scss";

const OrderInfo = ({ title, descr, addition }) => {
  return (
    <div className="order_info">
      <h3 className="order_info_title">{title}</h3>
      <div className="order_info_text">
        <p className="order_info_descr">{descr}</p>
        {addition && <p className="order_info_more">{addition}</p>}
      </div>
    </div>
  );
};

export default OrderInfo;
