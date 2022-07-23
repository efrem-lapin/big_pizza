import Icon from "../UI/Icon";

import "./Paginatiton.scss";

const Pagination = ({ num }) => {
  const items = [];
  for (let i = 0; i < num; i++) {
    items.push(i + 1);
  }
  return (
    <div className="pagination">
      <div className="pagination_arrow prev">
        <Icon name="arrow" />
      </div>
      {[...items.slice(0, 2), '...', ...items.slice(-1)].map((item) => (
        <div className="pagination_item">{item}</div>
      ))}
      <div className="pagination_arrow next">
        <Icon name="arrow" />
      </div>
    </div>
  );
};

export default Pagination;
