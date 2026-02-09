//Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
};

function greetPerson(personObj) {
    console.log(`Hello! My name is ${personObj.name}, I'm ${personObj.age} years old, and I work as a ${personObj.occupation}.`);
}

function greetPersonWithStyle(personObj, style = "formal") {
    const greetings = {
        formal: `Good day. I am ${personObj.name}, ${personObj.age} years of age, employed as a ${personObj.occupation}.`,
        casual: `Hey! I'm ${personObj.name}, ${personObj.age}, and I'm a ${personObj.occupation}.`,
        friendly: `Hi there! I'm ${personObj.name}. I work as a ${personObj.occupation} and I'm ${personObj.age} years young!`,
        professional: `${personObj.name}, ${personObj.occupation}, age ${personObj.age}.`
    };

    console.log(greetings[style] || greetings.formal);
}

greetPerson(person);

greetPersonWithStyle(person, "casual");
greetPersonWithStyle(person, "friendly");
greetPersonWithStyle(person, "professional");
