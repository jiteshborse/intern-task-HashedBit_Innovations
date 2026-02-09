// Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

function filterOutEvens(numbers) {
    return numbers.filter(number => number % 2 !== 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = filterOutEvens(numbers);

console.log("Original array:", numbers);
console.log("Odd numbers only:", oddNumbers);
