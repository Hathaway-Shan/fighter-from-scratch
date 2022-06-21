//generates a random number
export function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
//uses the generated random number to pick
//an item out of array.length and return it
export function getRandomItem(array) {
    const random = getRandomIndex(array.length);
    const item = array[random];
    return item;
}