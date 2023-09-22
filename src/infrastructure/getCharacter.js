// Здесь будет функция получения объекта персонажа из API

import { Character } from "../domain/entity/Character";
import defaultImage from "../assets/img/default-image.jpg";

async function getCharacter() {
  try {
    //Получаем объект с объектами всех персонажей
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

    //Проверяем, есть ли изображение, если нет, ставим дефолтное. Его мы импортировали в этот файл в начале как defaultImage, чтобы вебпак прописал к нему путь
    if (image === "")
      image = defaultImage;

    //Эту строку уберём в конечной версии, сейчас она полезна
    console.log(result[number]);

    //Возвращаем объект персонажа с помощью класса, прописанного в domain/entity/Character.js и импортированного в начале. Если хотим добавить ему свойств, добавляем их в тот класс конструктор и сюда.
    return new Character(
      name,
      image
    );
  }
  catch (error) {
    console.log("Ошибка!", error.message);
    //Здесь в идеале нужно будет дописать хорошо оформленный вывод ошибок на экран, или как ещё мы решим их обрабатывать
  }
}

export { getCharacter };