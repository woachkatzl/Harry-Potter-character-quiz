// Здесь будет класс персонажа, содержащий в себе всю информацию, полученную из API

class Character {
  #name;
  #image;
  #house;
  #species;
  #ancestry;
  #yearOfBirth;
  #actor;
  #alive;

  //В конструктор добавляем все свойства объекта, которые хотим выводит в результатах. Также добавляем их выше с # и ниже в геттеры
  constructor(
    name,
    image,
    house,
    species,
    ancestry,
    yearOfBirth,
    actor,
    alive
  ) {
    this.#name = name;
    this.#image = image;
    this.#house = house;
    this.#species = species;
    this.#ancestry = ancestry;
    this.#yearOfBirth = yearOfBirth;
    this.#actor = actor;
    this.#alive = alive;
  }

  get name() {
    return this.#name;
  }

  get image() {
    return this.#image;
  }

  get house() {
    return this.#house;
  }

  get species() {
    return this.#species;
  }

  get ancestry() {
    return this.#ancestry;
  }

  get yearOfBirth() {
    return this.#yearOfBirth;
  }

  get actor() {
    return this.#actor;
  }

  get alive() {
    return this.#alive;
  }
}

export { Character };