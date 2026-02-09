//Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const object1 = { name: "Alice", age: 30 };
const object2 = { occupation: "Engineer", city: "New York" };

const merged = mergeObjects(object1, object2);
console.log(merged);