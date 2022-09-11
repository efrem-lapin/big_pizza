import Drawer from "../Drawer/Drawer";
import FilterSection from "../FilterSection/FilterSection";

const FilterDrawer = ({ close }) => {
  const filters = [
    {
      title: "Общие",
      data: [
        { title: "Хит", value: "Хит", name: "common" },
        { title: "Новинка", value: "Новинка", name: "common" },
        { title: "Цыпленок", value: "Цыпленок", name: "common" },
        { title: "С халапеньо", value: "С халапеньо", name: "common" },
        { title: "С луком", value: "С луком", name: "common" },
        { title: "С грибами", value: "С грибами", name: "common" },
        { title: "Ветчина", value: "Ветчина", name: "common" },
      ],
    },

    {
      title: "Соус",
      data: [
        { title: "Соус белый", value: "Соус белый", name: "common" },
        { title: "Cоус красный", value: "Cоус красный", name: "common" }
      ]
    }
  ];

  return (
    <Drawer
      title="Фильтры"
      type="filter"
      closeCallback={close}
    >
      {filters.map((filter) => (
        <FilterSection
          key={filter.title}
          title={filter.title}
          items={filter.data}
        />
      ))}
    </Drawer>
  );
};

export default FilterDrawer;
