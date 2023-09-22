// Здесь будет класс персонажа, содержащий в себе всю информацию, полученную из API

class Character {
  #name;
  #image;

  constructor(name, image) {
    this.#name = name;
    this.#image = image;
  }

  get name() {
    return this.#name;
  }

  get image() {
    return this.#image;
  }
}

export { Character };