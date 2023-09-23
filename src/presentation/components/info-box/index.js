//Здесь будет класс InfoBox, на основе которого будет отрисовываться div-рамка с инофрмацией о персонаже
import "./styles.scss";
import { List } from "../../ui-kit/list";

class InfoBox {

  constructor(name, house, species, ancestry, yearOfBirth, actor) {
    //Сразу в конструкторе создаём див-обёртку и присваем ему класс со стилями. 
    this.wrapper = document.createElement("div");
    this.wrapper.className = "result";

    //Если хотим добавить информацию, выводимую в рамке, добавляем её как аргумент здесь в конструктор
    this.name = name;
    this.house = house;
    this.species = species;
    this.ancestry = ancestry;
    this.yearOfBirth = yearOfBirth;
    this.actor = actor;
  }

  render() {
    //Очищаем наполенение при каждом новом запуске рендера
    this.wrapper.innerHTML = "";

    //Создаём элемент с именем персонажа со стилями
    const title = document.createElement("h1");
    title.className = "result__title";
    title.appendChild(new Text(this.name));

    //Создаём список с категориями персонажа
    //Создаём 2 массива для списков категорий
    const categories = ["house", "species", "ancestry", "yearOfBirth", "actor"];
    const results = [this.house, this.species, this.ancestry, this.yearOfBirth, this.actor];

    const resultInfo = document.createElement("div");
    resultInfo.className = "result__info";
    resultInfo.appendChild(new List(categories, results));

    //Добавляем созданные элементы в див-обёртку
    this.wrapper.appendChild(title);
    this.wrapper.appendChild(resultInfo);

    return this.wrapper;
  }
}

export { InfoBox };