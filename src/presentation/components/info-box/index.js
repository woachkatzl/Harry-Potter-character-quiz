//Здесь будет класс InfoBox, на основе которого будет отрисовываться div-рамка с инофрмацией о персонаже
import "./styles.scss";

class InfoBox {

  constructor(name) {
    //Сразу в конструкторе создаём див-обёртку и присваем ему класс со стилями. 
    this.wrapper = document.createElement("div");
    this.wrapper.className = "result";

    //Если хотим добавить информацию, выводимую в рамке, добавляем её как аргумент здесь в конструктор
    this.name = name;
  }

  render() {
    //Очищаем наполнение при каждом новом запуске рендера
    this.wrapper.innerHTML = "";

    //Создаём элемент с именем персонажа со стилями
    const title = document.createElement("h1");
    title.className = "result__title";
    title.appendChild(new Text(this.name));

    //Добавляем созданные элементы в див-обёртку
    this.wrapper.appendChild(title);

    return this.wrapper;
  }
}

export { InfoBox };