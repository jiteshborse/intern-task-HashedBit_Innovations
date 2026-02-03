const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumOfProducts(n1, n2) {
    const str1 = Math.abs(n1).toString();
    const str2 = Math.abs(n2).toString();

    const maxLength = Math.max(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < maxLength; i++) {
        const digit1 = i < str1.length
            ? parseInt(str1[str1.length - 1 - i])
            : 0;

        const digit2 = i < str2.length
            ? parseInt(str2[str2.length - 1 - i])
            : 0;

        sum += digit1 * digit2;
    }

    return sum;
}

rl.question("Enter first number: ", (input1) => {
    rl.question("Enter second number: ", (input2) => {
        const n1 = Number(input1);
        const n2 = Number(input2);

        const result = sumOfProducts(n1, n2);
        console.log("Result:", result);

        rl.close();
    });
});
