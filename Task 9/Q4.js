// Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function squareNumbers(arr) {
    return arr.map(number => number * number);
}

function squareNumbersExplicit(arr) {
    return arr.map(function (number) {
        return number * number;
    });
}

const squaredNumbers = squareNumbers(numbers);
console.log("Original array:", numbers);
console.log("Squared numbers:", squaredNumbers);

console.log("Original array after map:", numbers);
