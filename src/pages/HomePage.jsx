import React from "react";
import Categories from "../components/Categories/Categories";
import PostersList from "../components/PostersList/PostersList";
import ProductSection from "../components/ProductSection/ProductSection";
import ArticleHidden from "../components/ArticleHidden/ArticleHidden";
import { setIsOpenFilter } from "../store/slices/filterSlice";
import { useDispatch } from "react-redux";
import CheckLocation from "../components/CheckLocation/CheckLocation";

const HomePage = () => {
  const posters = [
    {
      id: "post1",
      text: "3 средние пиццы от 999 рублей",
      image: "img/posts/post1.jpg",
    },
    {
      id: "post2",
      text: "Кэшбек 10% на самовывоз (доставка)",
      image: "img/posts/post2.jpg",
    },
    {
      id: "post3",
      text: "3 средние пиццы от 999 рублей",
      image: "img/posts/post1.jpg",
    },
    {
      id: "post4",
      text: "Кэшбек 10% на самовывоз (доставка)",
      image: "img/posts/post2.jpg",
    },
  ];

  const prodSectionItems = [
    { key: "keyPizza", title: "Пицца", path: "pizza", id: "catPizza", filter: true },
    // { key: "keySushi", title: "Суши", path: "sushi", id: "catSushi" },
    // { key: "keyDrinks", title: "Напитки", path: "desserts", id: "catDrinks" },
    // { key: "keySnacks", title: "Закуски", path: "snacks", id: "catSnacks" },
    // { key: "keyCombo", title: "Комбо", path: "snacks", id: "catCombo" },
    // { key: "keyDeserts", title: "Десерты", path: "desserts", id: "catDiserts" },
    // { key: "keySauce", title: "Соусы", path: "desserts", id: "catSauce" },
  ];

  const categories = [
    { id: "catStock", title: "Акции", image: "fire" },
    { id: "catPizza", title: "Пицца", image: "pizza" },
    { id: "catSushi", title: "Суши", image: "sushi" },
    { id: "catDrinks", title: "Напитки", image: "drinks" },
    { id: "catSnacks", title: "Закуски", image: "snacks" },
    { id: "catCombo", title: "Комбо", image: "combo" },
    { id: "catDiserts", title: "Десерты", image: "deserts" },
    { id: "catSauce", title: "Соусы", image: "sauce" },
  ];

  const dispatch = useDispatch();

  function openFilter() {
    dispatch(setIsOpenFilter(true));
  }
  return (
    <>
      <Categories items={categories} />
      <PostersList items={posters} id="catStock" />
      <div className="container">
        <CheckLocation/>
      </div>
      {prodSectionItems.map((item) => (
        <ProductSection key={item.id} filter={item.filter} {...item} openFilter={openFilter} />
      ))}
      <ArticleHidden />
    </>
  );
};

export default HomePage;
