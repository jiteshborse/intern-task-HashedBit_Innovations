//Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calculateSum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const sum = calculateSum(numbers);
console.log("Array:", numbers);
console.log("Sum:", sum);