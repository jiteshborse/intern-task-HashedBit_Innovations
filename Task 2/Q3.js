const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findTax2(salary) {
    if (typeof salary !== "number" || isNaN(salary) || salary < 0) {
        return "Invalid salary amount!";
    }

    let taxAmount;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxAmount = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxAmount = salary * 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxAmount = salary * 0.20;
            break;
        case (salary > 1500000):
            taxAmount = salary * 0.30;
            break;
        default:
            taxAmount = 0;
    }

    return taxAmount;
}

rl.question("Enter your salary: ", (input) => {
    const salary = Number(input);
    const result = findTax2(salary);

    console.log("Tax Amount:", result);
    rl.close();
});
