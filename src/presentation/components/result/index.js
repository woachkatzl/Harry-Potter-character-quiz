//Здесь будет собираться весь визуал для вывода результата: 1) изображение 2) инфо-бокс 3) кнопка "Try again"
import "./styles.scss";
import { getCharacter } from "../../../infrastructure/getCharacter";
import { Image } from "../../ui-kit/image";
import { Button } from "../../ui-kit/button";
import { InfoBox } from "../info-box";

class Result {
  #character;

  constructor() {
    //Создаём главный див-обёртку для всей информации, добавляемой с помощью скрипта. Мы его приклеим в основном index.js в наш див "wrapper", который лежит в шаблоне public/index.html.
    this.wrapper = document.createElement("div");
    this.wrapper.className = "populate";
    this.wrapper.setAttribute("id", "result-container");
  }

  //Метод, который будет получать новый объект персонажа из API и перерисовывать содержание главного дива-обёртки
  updateInfo = async () => {
    this.#character = await getCharacter();

    this.render();
  };

  render() {
    //Очищаем наполнение при каждом новом запуске рендера
    this.wrapper.innerHTML = "";

    //Если пока нет данных персонажа, возвращяем пустой див-обёртку. Например, при первой загрузке страницы мы приклеим этот див пустым, и положим в него изначальные изображение с кнопкой в основном index.js
    if (!this.#character)
      return this.wrapper;

    //Создаём изображение персонажа из полученного ранее объекта
    const characterImage = new Image(this.#character.image, "character-img");
    //Создаём рамку с информацией о персонаже. Если добавим ещё свойств, нужно будет добавить их здесь в конструктор
    const characterInfoBox = new InfoBox(this.#character.name);

    //Добавляем изображение, рамку с инфой и новую кнопку в главный див-обёртку
    this.wrapper.appendChild(characterImage.render());
    this.wrapper.appendChild(characterInfoBox.render());
    this.wrapper.appendChild(new Button(this.updateInfo, "TRY AGAIN").render());

    return this.wrapper;
  }
}

export { Result };