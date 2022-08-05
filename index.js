// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function appendCat(name) {
    let newCats = [...cats, name];
    return newCats;
}
function prependCat(name) {
    let newCats = [name, ...cats];
    return newCats;
}
function removeLastCat() {
    let newCats = [...cats.slice(0, 2)];
    return newCats;
    
}

function removeFirstCat () {
    let newCats;
    newCats = cats.slice(1);
    return newCats;
}
    
removeFirstCat();
