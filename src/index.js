import './assets/styles/global.scss';
import { Button } from './components/start-button';

function magic() {
    console.log("Success!");
}

const startButton = new Button(magic, "START");

document.body.append(startButton.render());