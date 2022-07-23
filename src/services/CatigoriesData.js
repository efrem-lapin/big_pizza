class CatigoriesData {
  catigories = [
    { id: "catStock", title: "Акции", image: "fire" },
    { id: "catPizza", title: "Пицца", image: "pizza" },
    { id: "catSushi", title: "Суши", image: "sushi" },
    { id: "catDrinks", title: "Напитки", image: "drinks" },
    { id: "catSnacks", title: "Закуски", image: "snacks" },
    { id: "catCombo", title: "Комбо", image: "combo" },
    { id: "catDiserts", title: "Десерты", image: "deserts" },
    { id: "catSauce", title: "Соусы", image: "sauce" },
  ];

  getCategories() {
    return this.catigories
  }
}

export default CatigoriesData;
