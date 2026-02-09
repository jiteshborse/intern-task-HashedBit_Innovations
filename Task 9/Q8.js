//Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

function getObjectKeys(obj) {
    return Object.keys(obj);
}

const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer",
    city: "New York",
    hobbies: ["reading", "hiking"]
};

const keys = getObjectKeys(person);
console.log(keys); 