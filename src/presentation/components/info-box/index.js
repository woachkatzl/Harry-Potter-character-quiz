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
    //Убрала эту строку. Она оказалась не нужна, т.к. мы весь контейнер результата очищаем уже
    //this.wrapper.innerHTML = "";

    //Создаём элемент с именем персонажа со стилями
    const title = document.createElement("h1");
    title.className = "result__title";
    title.appendChild(new Text(this.name));

    //Создаём список с категориями персонажа
    //Создаём 2 массива для списков категорий
    const categories1 = ["HOUSE", "SPECIES", "ANCESTRY"];
    const categories2 = ["YEAR OF BIRTH", "ACTOR"];
    const results1 = [this.house, this.species, this.ancestry];
    const results2 = [this.yearOfBirth, this.actor];

    const resultInfo = document.createElement("div");
    resultInfo.className = "result__info";
    resultInfo.appendChild(new List(categories1, results1).render());
    resultInfo.appendChild(new List(categories2, results2).render());

    //Добавляем созданные элементы в див-обёртку
    this.wrapper.appendChild(title);
    this.wrapper.appendChild(resultInfo);

    return this.wrapper;
  }
}

export { InfoBox };