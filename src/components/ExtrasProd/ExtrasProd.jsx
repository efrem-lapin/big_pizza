import ExtrasProdItem from "../ExtrasProdItem/ExtrasProdItem";

const items = [
  { icon: "cheese", title: "Больше сыра", price: 99, id: "extras1" },
  { icon: "sauce", title: "Больше соуса", price: 40, id: "extras2" },
];

const ExtrasProd = () => {
  return (
    <div className="product_composition">
      <div className="product_composition_title">Добавьте в товар: </div>
      <ul className="ingredients">
        {items.map((item) => <ExtrasProdItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
};

export default ExtrasProd;
