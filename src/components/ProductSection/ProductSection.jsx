import React, { useEffect, useState } from "react";
import EmptyCard from "../EmptyCard/EmptyCard";
import ProductItem from "../ProductItem/ProductItem";
import Drawer from "../Drawer/Drawer";
import FilterSection from "../FilterSection/FilterSection";
import Icon from "../UI/Icon";

import "./ProductSection.scss";

const ProductSection = ({ title, path, id, openFilter}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    fetch(`https://629b092bcf163ceb8d12c45b.mockapi.io/${path}`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (items.length) setLoading(false);
    else setLoading(true);
  }, [items]);

  const emptys = [
    { id: "empty1" },
    { id: "empty2" },
    { id: "empty3" },
    { id: "empty4" },
    { id: "empty5" },
    { id: "empty6" },
    { id: "empty7" },
    { id: "empty8" },
  ];

  const filters = [
    {
      title: "Общие",
      data: [
        { title: "Хит", value: "hit", name: "common" },
        { title: "Новинка", value: "new", name: "common" },
        { title: "С мясом", value: "meat", name: "common" },
        { title: "Вегетарианская", value: "vegan", name: "common" },
        { title: "С курицей", value: "chiken", name: "common" },
        { title: "Без лука", value: "non_onion", name: "common" },
        { title: "С грибами", value: "mushrooms", name: "common" },
        { title: "С морепродуктами", value: "seafood", name: "common" },
        { title: "Барбекью", value: "bbq", name: "common" },
      ],
    },

    {
      title: "Сыр",
      data: [
        { title: "Реджанито", value: "redjanito", name: "cheese" },
        { title: "Моцарелла", value: "mozarella", name: "cheese" },
        { title: "Чеддер", value: "chedder", name: "cheese" },
        { title: "С плесенью", value: "fungus", name: "cheese" },
        {
          title: "Смесь итальянских сыров",
          value: "mix_italian",
          name: "cheese",
        },
        { title: "Мягкий молодой сыр", value: "soft_cheese", name: "cheese" },
      ],
    },

    {
      title: "Мясо",
      data: [
        { title: "Пипперони", value: "pipperoni", name: "meat" },
        { title: "Свинина", value: "pork", name: "meat" },
        { title: "Ветчина", value: "ham", name: "meat" },
        { title: "Бекон", value: "bacon", name: "meat" },
        { title: "Говядина", value: "beef", name: "meat" },
        { title: "Чоризо", value: "chorizo", name: "meat" },
        { title: "Колбаски", value: "sausage", name: "meat" },
        { title: "Куриная грудка", value: "chicken_breast", name: "meat" },
      ],
    },

    {
      title: "Компонент",
      data: [
        { title: "Креветка", value: "hit", name: "common" },
        { title: "Ананасы", value: "new", name: "common" },
        { title: "Шампиьоны", value: "meat", name: "common" },
        { title: "Лук", value: "onion", name: "common" },
        { title: "Перец халапеньо", value: "chiken", name: "common" },
        { title: "Орегано", value: "non_onion", name: "common" },
        { title: "Зеленый перец", value: "mushrooms", name: "common" },
        { title: "Томаты", value: "tomato", name: "common" },
        { title: "Красный перец", value: "bbq", name: "common" },
        { title: "Чеснок", value: "garlic", name: "common" },
        { title: "Оливки", value: "bbq", name: "common" },
        { title: "Маслины", value: "bbq", name: "common" },
        { title: "Клубника", value: "bbq", name: "common" },
        { title: "Смесь итальянских трав", value: "bbq", name: "common" },
      ],
    },
  ];

  return (
    <>
      {isFilter ? (
        <Drawer title="Фильтры" type="filter" closeCallback={() => setIsFilter(false)}>
          {filters.map((filter) => (
            <FilterSection
              key={filter.title}
              title={filter.title}
              items={filter.data}
            />
          ))}
        </Drawer>
      ) : null}
      <section className="product_section" id={id}>
        <div className="container">
          <div className="section_upper">
            <h1 className="section_title">{title}</h1>
            <div className="filters" onClick={() => setIsFilter(true)}>
              <Icon name="filter" />
              Фильтры
            </div>
          </div>
          <div className="section_content">
            <ul className="product_list">
              {loading
                ? emptys.map((item) => <EmptyCard key={item.id} />)
                : items.map((item) => (
                    <ProductItem key={item.id} item={item}/>
                  ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
