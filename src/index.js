//Стили
import "./assets/styles/global.scss";

//Изображения
import initialImage from "./assets/img/main-pic.png";

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

//Получаем его, чтобы наполнить начальным контентом
const resultContainer = document.querySelector("#result-container");

//Заполняем начальную страницу
resultContainer.appendChild(new Image(initialImage, "cartoon-init").render());
resultContainer.appendChild(new Button(result.updateInfo, "START").render());