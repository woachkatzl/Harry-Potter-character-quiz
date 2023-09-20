import { Character } from "../../domain/entity/Character";


export async function getCharacter() {
  const response = await fetch("https://hp-api.onrender.com/api/characters");

  const result = await response.json();

  const number = Math.ceil(Math.random() * (result.length - 1)); //Получаем случайное число от 1 до 401 (количество персонажей в API)

  let name = result[number].name;

  if (name === "") {
    name = "Default";
  }

  console.log(result[number]);
  return new Character(name, result[number].house);
}