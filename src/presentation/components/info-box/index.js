import "./styles.scss";
import { getCharacter } from "../../../infrastructure/name/getCharacter";
import { TitleText } from "../../ui-kit/title-text";

class InfoBox {
  #character;

  constructor() {
    this.wrapper = document.createElement("div");
    this.wrapper.className = "result";
  }

  updateInfo = async () => {
    this.#character = await getCharacter();

    this.render();
  };

  render() {
    this.wrapper.innerHTML = "";
    if (!this.#character) {
      return this.wrapper;
    }

    const title = new TitleText(this.#character.name);

    this.wrapper.appendChild(title.render());

    return this.wrapper;
  }
}

export {InfoBox};