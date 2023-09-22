//Здесь будет класс InfoBox, на основе которого будет отрисовываться div-рамка с инофрмацией о персонаже
import "./styles.scss";

class InfoBox {

  constructor(name) {
    this.wrapper = document.createElement("div");
    this.wrapper.className = "result";

    this.name = name;
  }

  render() {
    this.wrapper.innerHTML = "";

    const title = document.createElement("h1");
    title.className = "result__title";
    title.appendChild(new Text(this.name));

    this.wrapper.appendChild(title);

    return this.wrapper;
  }
}

export { InfoBox };