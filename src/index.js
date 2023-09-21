//Стили
import "./assets/styles/global.scss";

//Изображения
import cartoon from "./assets/img/mickey.png";

//Компоненты
import { Button } from "./presentation/ui-kit/button";
import { Image } from "./presentation/ui-kit/image";

//Конейнер, куда заполняем контент
const container = document.querySelector("#container");

//Заполняем начальную страницу
container.appendChild(new Image(cartoon, "cartoon-init").render());
container.appendChild(new Button(() => null, "START").render());