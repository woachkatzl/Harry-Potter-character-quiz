// Здесь будет функция получения объекта персонажа из API

import { Character } from "../domain/entity/Character";
import defaultImage from "../assets/img/default-image.jpg"

async function getCharacter() {
    try {
        const response = await fetch("https://hp-api.onrender.com/api/characters");

        const result = await response.json();

        //Получаем случайное число от 1 до максимального количества персонажей в API)
        const number = Math.ceil(Math.random() * (result.length - 1));

        //Проверяем, чтобы по полученному числу вернулся существующий объект с персонажем
        if (result[number] === undefined)
            throw new Error("Character not found");

        //Получаем имя персонажа
        let name = result[number].name;

        //Проверяем, что получили персонажа
        if (name === "")
            throw new Error("Character not found");

        //Получаем изображение персонажа
        let image = result[number].image;

        //Проверяем, есть ли изображение, если нет, ставим дефолтное
        if (image === "")
            image = defaultImage;

        //Эту строку уберём в конечно версии, сейчас она полезна
        console.log(result[number]);

        return new Character(name, image);
    }
    catch (error) {
        console.log("Ошибка!", error.message);
        //Здесь нужно будет дописать хорошо оформленный вывод ошибок на экран 
    }
}

export { getCharacter };