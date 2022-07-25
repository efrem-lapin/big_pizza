import Icon from "../UI/Icon";

import "./ProductModalHeader.scss";

const ProductModalHeader = ({ labelFire, title, descr }) => {
  return (
    <>
      <div className="product_header">
        <div className="product_title_wrapper">
          {labelFire && <Icon name="fire" />}
          <h2 className="product_title">{title}</h2>
        </div>

        <div className="product_info_btn">
          <Icon name="info" />
        </div>
      </div>
      <div className="product_descr_modal">{descr}</div>
    </>
  );
};

export default ProductModalHeader;
