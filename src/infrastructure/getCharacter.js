// Здесь будет функция получения объекта персонажа из API
//Классы
import { Character } from "../domain/entity/Character";
import { CommonException } from "../domain/entity/CommonException";

//Функционал
import { fetchWithTimeout } from "./timeoutFetch";

//Изображения
import defaultImage from "../assets/img/default-image.jpg";

async function getCharacter() {

  try {
    //Проверяем, интернет соединение пользователя
    if (!navigator.onLine) {
      throw new Error("No internet connection available.");
    }

    //Получаем ответ с сервера
    const response = await fetchWithTimeout("https://hp-api.onrender.com/api/characters");

    //Проверяем статус ответа с сервера
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
    }

    //Получаем объект с объектами всех персонажей
    const result = await response.json();

    //Получаем случайное число от 1 до максимального количества персонажей в API
    const number = Math.ceil(Math.random() * (result.length - 1));

    //Проверяем, чтобы по полученному числу вернулся существующий объект с персонажем
    if (result[number] === undefined)
      throw new Error("Character with random index not found");

    //Получаем имя персонажа
    let name = result[number].name;

    //Проверяем, что получили персонажа
    if (name === "")
      throw new Error("Character name is empty");

    //Получаем изображение персонажа
    let image = result[number].image;

    //Проверяем, есть ли изображение, если нет, ставим дефолтное. Его мы импортировали в этот файл в начале как defaultImage, чтобы вебпак прописал к нему путь
    if (image === "")
      image = defaultImage;

    //Получаем живой персонаж или погибший
    const alive = result[number].alive;

    //Проверяем, что получили не пустые категории персонажа
    let house = result[number].house;

    if (house === "")
      house = "Did not go to Hogwarts";

    let species = result[number].species;

    if (species === "")
      species = "Some other unearthly creature";

    let ancestry = result[number].ancestry;

    if (ancestry === "")
      ancestry = "Who cares about that now anyways?";

    let yearOfBirth = result[number].yearOfBirth;

    if (yearOfBirth === null)
      yearOfBirth = "A year long passed";

    let actor = result[number].actor;

    if (actor === "")
      actor = "Did not make it to the movies";

    //Эту строку уберём в конечной версии, сейчас она полезна
    console.log(result[number]);

    //Возвращаем объект персонажа с помощью класса, прописанного в domain/entity/Character.js и импортированного в начале. Если хотим добавить ему свойств, добавляем их в тот класс конструктор и сюда.
    return new Character(
      name,
      image,
      house,
      species,
      ancestry,
      yearOfBirth,
      actor,
      alive,
    );
  }
  catch (error) {
    console.log("Ошибка!", error.message);

    //Возвращаем объек ошибки с помощью класса, прописанного в domain/entity/Error.js и импортированного в начале
    return new CommonException(error.message);
  }
}

export { getCharacter };