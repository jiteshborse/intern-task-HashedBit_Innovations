function repeatedDigitSum(num) {
    num = Math.abs(num);

    while (num >= 10) {
        let sum = 0;

        for (let digit of num.toString()) {
            sum += Number(digit);
        }

        num = sum;
    }

    return num;
}

console.log(repeatedDigitSum(456)); 
