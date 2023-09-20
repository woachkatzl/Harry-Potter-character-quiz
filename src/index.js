import './assets/styles/global.scss';
import { Button } from './presentation/ui-kit/button';
import { imageInit } from './presentation/ui-kit/img-init';
import { getCharacter } from './infrastructure/disneyApi';
import cartoon from './assets/img/mickey.png';

const container = document.querySelector(".populate");

container.appendChild(new Button(getCharacter, "START").render());
container.appendChild(new imageInit(cartoon).render());