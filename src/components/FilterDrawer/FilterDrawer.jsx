import Drawer from "../Drawer/Drawer";
import FilterSection from "../FilterSection/FilterSection";

const FilterDrawer = ({ close }) => {
  const filters = [
    {
      title: "Общие",
      data: [
        { title: "Хит", value: "Хит", name: "common" },
        { title: "Новинка", value: "Новинка", name: "common" },
        { title: "С мясом", value: "Мясо", name: "common" },
        { title: "Вегетарианская", value: "Вегетарианская", name: "common" },
        { title: "С курицей", value: "Курица", name: "common" },
        { title: "Без лука", value: "Без лука", name: "common" },
        { title: "С грибами", value: "Грибы", name: "common" },
        { title: "С морепродуктами", value: "Морепродукты", name: "common" },
        { title: "Барбекью", value: "Барбекью", name: "common" },
        { title: "С луком", value: "Лук", name: "common" },
      ],
    },

    // {
    //   title: "Сыр",
    //   data: [
    //     { title: "Реджанито", value: "redjanito", name: "cheese" },
    //     { title: "Моцарелла", value: "mozarella", name: "cheese" },
    //     { title: "Чеддер", value: "chedder", name: "cheese" },
    //     { title: "С плесенью", value: "fungus", name: "cheese" },
    //     {
    //       title: "Смесь итальянских сыров",
    //       value: "mix_italian",
    //       name: "cheese",
    //     },
    //     { title: "Мягкий молодой сыр", value: "soft_cheese", name: "cheese" },
    //   ],
    // },

    // {
    //   title: "Мясо",
    //   data: [
    //     { title: "Пипперони", value: "pipperoni", name: "meat" },
    //     { title: "Свинина", value: "pork", name: "meat" },
    //     { title: "Ветчина", value: "ham", name: "meat" },
    //     { title: "Бекон", value: "bacon", name: "meat" },
    //     { title: "Говядина", value: "beef", name: "meat" },
    //     { title: "Чоризо", value: "chorizo", name: "meat" },
    //     { title: "Колбаски", value: "sausage", name: "meat" },
    //     { title: "Куриная грудка", value: "chicken_breast", name: "meat" },
    //   ],
    // },

    // {
    //   title: "Компонент",
    //   data: [
    //     { title: "Креветка", value: "hit", name: "common" },
    //     { title: "Ананасы", value: "new", name: "common" },
    //     { title: "Шампиьоны", value: "meat", name: "common" },
    //     { title: "Лук", value: "onion", name: "common" },
    //     { title: "Перец халапеньо", value: "chiken", name: "common" },
    //     { title: "Орегано", value: "non_onion", name: "common" },
    //     { title: "Зеленый перец", value: "mushrooms", name: "common" },
    //     { title: "Томаты", value: "tomato", name: "common" },
    //     { title: "Красный перец", value: "bbq", name: "common" },
    //     { title: "Чеснок", value: "garlic", name: "common" },
    //     { title: "Оливки", value: "bbq", name: "common" },
    //     { title: "Маслины", value: "bbq", name: "common" },
    //     { title: "Клубника", value: "bbq", name: "common" },
    //     { title: "Смесь итальянских трав", value: "bbq", name: "common" },
    //   ],
    //},
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
