import React from "react";
import PostersList from "../components/PostersList/PostersList";
import ProductSection from "../components/ProductSection/ProductSection";
import ArticleHidden from "../components/ArticleHidden/ArticleHidden";
import CheckLocation from "../components/CheckLocation/CheckLocation";
import Categories from "../components/Categories/Categories";

import { setIsOpenFilter } from "../store/slices/filterSlice";
import { useDispatch } from "react-redux";

import prodSectionItems from "../assets/data/prodSectionItems.json";
import categories from "../assets/data/categories.json";
import posters from "../assets/data/posters.json";

const HomePage = () => {
  const dispatch = useDispatch();

  function openFilter() {
    dispatch(setIsOpenFilter(true));
  }

  return (
    <>
      <Categories items={categories} />
      <PostersList items={posters} id="catStock" />
      <div className="container">
        <CheckLocation />
      </div>
      {prodSectionItems.map((item) => (
        <ProductSection
          key={item.id}
          filter={item.filter}
          {...item}
          openFilter={openFilter}
        />
      ))}
      <ArticleHidden />
    </>
  );
};

export default HomePage;
