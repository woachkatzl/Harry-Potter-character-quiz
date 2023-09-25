// Здесь будет класс, создающий изображение <img>

import "./styles.scss";

class Image {

  constructor(url, className) {
    this.url = url;
    this.className = className;
  }

  render() {
    const image = document.createElement("img");

    image.src = this.url;
    image.className = this.className;

    return image;
  }
}

export { Image };