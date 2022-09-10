import React, {useState} from "react";

import "./ArticleHidden.scss";

const ArticleHidden = () => {
  const [isHidden, setIsHidden] = useState(true);

  function toggleHidden() {
    setIsHidden((prev) => !prev);
  }

  return (
    <div className="main_descr">
      <div className="container">
        <div className={isHidden ? "main_descr_inner" : "main_descr_inner showArticle"}>
          <h2 className="main_descr_title">Доставка пиццы в Москве</h2>
          <div className={isHidden ? "main_descr_text_wrapper" : "full"}>
            <p className="main_descr_text">
              Захотелось чего-то вкусного и сытного? Желание простое и понятное,
              только в холодильнике все не то, и до магазина идти лень. Все
              пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам
              на помощь спешит супергерой – Domino’s Pizza! Как у всякого
              супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный
              вкус продукции из отборных ингредиентов; широкий ассортимент,
              включающий легендарные, фирменные и классические виды, для
              вегетарианцев и любителей экспериментировать; быстрая и бесплатная
              доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо
              не успевало остыть.
            </p>
            <span className="main_descr_mini_title">Как сделать заказ</span>
            <p className="main_descr_text">
              Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать
              или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в
              Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам
              необходимо: выбрать понравившийся вариант и количество порций;
              положить желаемое в «Корзину»; не уходить далеко, так как вкусная
              пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии
              Domino’s. И не забудьте оплатить заказ курьеру!
            </p>
          </div>
          <div className="descr_full" onClick={toggleHidden}>{isHidden ? "Показать полность" : "Скрыть"}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHidden;
