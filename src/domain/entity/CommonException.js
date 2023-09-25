// Здесь будет класс ошибки, содержащий в себе информацию об ошибке

class CommonException {
  #message;

  constructor(message) {
    this.#message = message;
  }

  get message() {
    return this.#message;
  }

}

export { CommonException };