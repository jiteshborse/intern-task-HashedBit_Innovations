//Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

function calculateRectangleArea(rectangle) {
    return rectangle.width * rectangle.height;
}

const rectangle1 = { width: 10, height: 5 };
console.log(calculateRectangleArea(rectangle1));

const rectangle2 = { width: 7.5, height: 3.2 };
console.log(calculateRectangleArea(rectangle2));
