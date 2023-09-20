export async function getCharacter() {
    const response = await fetch('https://api.disneyapi.dev/character/1');

    const result = await response.json();

    console.log(result);
    return result;
}