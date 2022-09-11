import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductList from "../ProductList/ProductList";
import ListEmptyCard from "../ListEmptycard/ListEmptyCard";
import FilterDrawer from "../FilterDrawer/FilterDrawer";
import IconTextButton from "../IconTextButton/IconTextButton";

import "./ProductSection.scss";


const ProductSection = ({ title, path, id, filter }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilter, setIsFilter] = useState(false);
  const filterList = useSelector((state) => state.filter.list);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/${path}`)
      .then(data => data.json())
      .then((data) => {
        if (path === "pizza") {
          return data.filter((item) => filterList.every((keyword) => item.keywords.includes(keyword)))
        } else return data;
      })
      .then((filtredData) => setItems(filtredData))
      .catch((err) => console.log("ERROR", err));
  }, [isFilter]);

  useEffect(() => {
    if (!items.length && !filterList.length) setLoading(true);
    else setLoading(false);
  }, [items]);

  return (
    <>
      {isFilter && <FilterDrawer close={() => setIsFilter(false)}/>}
      <section className="product_section" id={id}>
        <div className="container">
          <div className="section_upper">
            <h1 className="section_title">{title}</h1>
            {filter && <IconTextButton text="Фильтры" icon="filter" click={() => setIsFilter(true)}/>}
          </div>
          <div className="section_content">
            {loading ? (
              <ListEmptyCard />
            ) : items.length ? (
              <ProductList items={items} />
            ) : (
              <div className="prod_message">Список товаров пуст</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
