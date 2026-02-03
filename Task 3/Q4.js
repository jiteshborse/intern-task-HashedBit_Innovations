const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string : ", (str) => {
    let vowels = 0;
    let consonants = 0;

    const input = str.toLowerCase();

    for (let ch of input) {
        if (ch >= "a" && ch <= "z") {
            if ("aeiou".includes(ch)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    console.log("Vowels:", vowels);
    console.log("Consonants:", consonants);

    rl.close();
});
