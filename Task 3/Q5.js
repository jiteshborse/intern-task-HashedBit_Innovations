const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

rl.question("Enter a sentence: ", (sentence) => {
    rl.question("Enter the wrong word: ", (wrong) => {
        rl.question("Enter the correct word: ", (correct) => {

            const result = correctfn(sentence, wrong, correct);
            console.log("Corrected sentence:", result);

            rl.close();
        });
    });
});
