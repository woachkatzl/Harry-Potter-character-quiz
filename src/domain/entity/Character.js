// Здесь будет класс персонажа, содержащий в себе всю информацию, полученную из API

class Character {
  #name;
  #image;

  //В конструктор добавляем все свойства объекта, которые хотим выводит в результатах. Также добавляем их выше с # и ниже в геттеры
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