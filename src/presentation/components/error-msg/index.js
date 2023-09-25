//Здесь будет класс ErrorMsg, на основе которого будет отрисовываться div-рамка с инофрмацией об ошибке
//Стили
import "./styles.scss";

//Компоненты
import { Text } from "../../ui-kit/text";

class ErrorMsg {

  constructor(message) {
    this.wrapper = document.createElement("div");
    this.wrapper.className = "result";

    this.message = message;
  }

  render() {
    //Создаём элемент с заголовком для ошибки
    const title = document.createElement("h1");
    title.className = "result__title";
    title.textContent = "Appologies!";

    //Создаём элемент с информацией об ошибке
    const errorMsg = document.createElement("p");
    errorMsg.className = "result__error";
    errorMsg.appendChild(new Text("An error appeared: " + this.message).render());

    //Добавляем созданные элементы в див-обёртку
    this.wrapper.appendChild(title);
    this.wrapper.appendChild(errorMsg);

    return this.wrapper;
  }
}

export { ErrorMsg };