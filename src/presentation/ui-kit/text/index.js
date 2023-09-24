//Здесь будет класс, создающий текст в теге <span>, который можно вставлять в другие элементы.
class Text {

  constructor(text) {
    this.text = text;
  }

  render = () => {
    const span = document.createElement("span");

    span.textContent = this.text;
    //добавить класс для текста
    //span.className = "";

    return span;
  };
}

export { Text };