//Здесь будет класс, создающий текст в теге <span>, который можно вставлять в другие элементы.
import "./styles.scss";

class Text {

  constructor(text) {
    this.text = text;
  }

  render = () => {
    const span = document.createElement("span");

    span.textContent = this.text;
    span.className = "";

    return span;
  };
}

export { Text };