//Стили
import "./assets/styles/global.scss";

//Изображения
import cartoon from "./assets/img/mickey.png";

//Компоненты
import { Button } from "./presentation/ui-kit/button";
import { Image } from "./presentation/ui-kit/image";
import { List } from "./presentation/ui-kit/list";

//Конейнер, куда заполняем контент
const container = document.querySelector("#container");

//массивы для теста списков
let categories = ["house", "yearOfBirth", "actor"];
let results = ["Gryffindor", 1980, "Daniel Radcliffe"];
    
//Заполняем начальную страницу
container.appendChild(new Image(cartoon, "cartoon-init").render());
container.appendChild(new Button(() => null, "START").render());
container.appendChild(new List(categories, results).render());