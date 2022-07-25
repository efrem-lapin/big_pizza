import Icon from "../UI/Icon";

import "./ProductModalLeft.scss";

const ProductModalLeft = ({label, img}) => {
  return (
    <div className="product_left">
      {label && <div className="product_label">{label}</div>}
      <img className="product_modal_img" src={img} alt="product" />
    </div>
  );
};

export default ProductModalLeft;