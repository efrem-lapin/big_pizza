import EmptyCard from "../EmptyCard/EmptyCard";

const ListEmptyCard = () => {
  const emptyList = [
    { id: "empty1" },
    { id: "empty2" },
    { id: "empty3" },
    { id: "empty4" },
    { id: "empty5" },
    { id: "empty6" },
    { id: "empty7" },
    { id: "empty8" },
  ];

  return (
    <ul className="product_list">
      {emptyList.map((empty) => (
        <EmptyCard key={empty.id} />
      ))}
    </ul>
  );
};

export default ListEmptyCard;