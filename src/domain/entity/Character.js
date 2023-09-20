class Character {
  #name;
  #house;

  constructor(name, house) {
    this.#name = name;
    this.#house = house;
  }

  get name() {
    return this.#name;
  }

  get house() {
    return this.#house;
  }
}

export { Character };