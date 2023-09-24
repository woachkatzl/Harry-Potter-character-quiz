// Здесь будет класс ошибки, содержащий в себе информацию об ошибке

class ErrorObj {
    #message;

    constructor(message) {
        this.#message = message;
    }

    get message() {
        return this.#message;
    }

}

export { ErrorObj };