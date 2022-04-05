// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    const newAppendCat = [...cats];
    newAppendCat.push("Broom");
    return newAppendCat;
}

function prependCat(name) {
    const newPrependCat = [...cats];
    newPrependCat.unshift("Arnold");
    return newPrependCat;
}

function removeLastCat(name) {
    const newRemoveLastCat = [...cats];
    newRemoveLastCat.pop();
    return newRemoveLastCat;
}

function removeFirstCat(name) {
    const newRemoveFirstCat = [...cats];
    newRemoveFirstCat.shift();
    return newRemoveFirstCat;
}