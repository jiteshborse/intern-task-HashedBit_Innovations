//Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.

const fruits = ["apple", "banana", "orange", "grape", "mango"];

function getSecondFruit() {
    return fruits[1];
}

function getSecondElement(array) {
    return array[1];
}

console.log(getSecondFruit());
console.log(getSecondElement(fruits));

console.log("Complete fruits array:", fruits);
console.log("Second fruit (direct access):", fruits[1]);

function getSecondFruitSafely() {
    if (fruits.length >= 2) {
        return fruits[1];
    } else {
        return "Array doesn't have enough fruits";
    }
}

function getSecondElementSafely(array) {
    if (Array.isArray(array) && array.length >= 2) {
        return array[1];
    } else {
        return "Invalid array or not enough elements";
    }
}

console.log(getSecondFruitSafely());
console.log(getSecondElementSafely(fruits));
console.log(getSecondElementSafely([]));
console.log(getSecondElementSafely(["onlyOne"]));
console.log(getSecondElementSafely("not an array"));
