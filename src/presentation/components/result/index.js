//Здесь будет собираться весь визул для вывода результата: 1) изображение 2) инфо-бокс 3) кнопка "Try again"
import "./styles.scss";
import { getCharacter } from "../../../infrastructure/getCharacter";
import { Image } from "../../ui-kit/image";
import { Button } from "../../ui-kit/button";
import { InfoBox } from "../info-box";

class Result {
    #character;

    constructor() {
        this.wrapper = document.createElement("div");
        this.wrapper.className = "populate";
        this.wrapper.setAttribute("id", "result-container")
    }

    updateInfo = async () => {
        this.#character = await getCharacter();

        this.render();
    }

    render() {
        this.wrapper.innerHTML = "";

        if (!this.#character)
            return this.wrapper;

        const characterImage = new Image(this.#character.image, "character-img");
        const characterInfoBox = new InfoBox(this.#character.name);

        this.wrapper.appendChild(characterImage.render());
        this.wrapper.appendChild(characterInfoBox.render());
        this.wrapper.appendChild(new Button(this.updateInfo, "TRY AGAIN").render());

        return this.wrapper;
    }
}

export { Result };