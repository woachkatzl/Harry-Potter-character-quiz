//Стили
import "./assets/styles/global.scss";

//Изображения
import initialImage1 from "./assets/img/main-pic1.png";
import initialImage2 from "./assets/img/main-pic2.png";

//Компоненты
import { Button } from "./presentation/ui-kit/button";
import { Image } from "./presentation/ui-kit/image";
import { Result } from "./presentation/components/result";

//Контейнер, куда заполняем контент
//Основной контейнер, куда заполняем контент
const container = document.querySelector("#container");

//Получаем результат - контейнер, где будет появляться информация из API
const result = new Result();

//Кладём его в контейнер
container.appendChild(result.render());

//Получаем его в DOM (контейнер-результат), чтобы наполнить начальным контентом
const resultContainer = document.querySelector("#result-container");

//Заполняем начальную страницу
//Случайно выбираем одно их двух начальных изображений
const number = Math.ceil(Math.random() * 2);
if (number === 1) {
    resultContainer.appendChild(new Image(initialImage1, "cartoon-init").render());
}
else {
    resultContainer.appendChild(new Image(initialImage2, "cartoon-init").render());
}
resultContainer.appendChild(new Button(result.updateInfo, "START").render());