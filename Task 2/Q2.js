const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculator() {
    rl.question("Enter the first number: ", (num1) => {
        rl.question("Enter the second number: ", (num2) => {
            rl.question("Enter the operation (+, -, *, /): ", (operation) => {

                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;

                switch (operation) {
                    case '+':
                        result = a + b;
                        console.log(`${a} + ${b} = ${result}`);
                        break;
                    case '-':
                        result = a - b;
                        console.log(`${a} - ${b} = ${result}`);
                        break;
                    case '*':
                        result = a * b;
                        console.log(`${a} * ${b} = ${result}`);
                        break;
                    case '/':
                        if (b === 0) {
                            console.log("Division by zero is not allowed.");
                            rl.close();
                            return;
                        }
                        result = a / b;
                        console.log(`${a} / ${b} = ${result}`);
                        break;
                    default:
                        console.log("Invalid operation.");
                }

                rl.close();
            });
        });
    });
}

calculator();
