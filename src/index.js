//Стили
import "./assets/styles/global.scss";
//Изображения
import cartoon from "./assets/img/mickey.png";
//Компоненты
import { Button } from "./presentation/ui-kit/button";
import { ImageInit } from "./presentation/ui-kit/img-init";
import { InfoBox } from "./presentation/components/info-box";

const container = document.querySelector(".populate"); //Контейнер в шаблоне, в котоый добавляем элементы, с помощью JS

const infoBox = new InfoBox();

container.appendChild(new Button(infoBox.updateInfo, "START").render());
container.appendChild(new ImageInit(cartoon).render());

container.appendChild(infoBox.render());