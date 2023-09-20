import "./styles.scss";

class TitleText {

  constructor(text) {
    this.text = text;
  }

  render = () => {
    const paragraph = document.createElement("h1");

    paragraph.textContent = this.text;
    paragraph.className = "result__title";

    return paragraph;
  };
}

export { TitleText };