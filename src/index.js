//Стили
import './assets/styles/global.scss';
//Изображения
import cartoon from './assets/img/mickey.png';
//Компоненты
import { Button } from './presentation/ui-kit/button';
import { imageInit } from './presentation/ui-kit/img-init';
//Функционал
import { getCharacter } from './infrastructure/disneyApi';

const container = document.querySelector(".populate"); //Контейнер в шаблоне, в котоый добавляем элементы, с помощью JS

container.appendChild(new Button(getCharacter, "START").render());
container.appendChild(new imageInit(cartoon).render());