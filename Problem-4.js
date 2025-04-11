const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("\n Enter numbers : ", (input) => {
    const numbers = input
        .split(",")
        .map((num) => parseInt(num.trim()))
        .filter((num) => !isNaN(num)); // filter out invalid numbers

    const result = {};

    // Initialize result object for digits 1 to 9
    for (let i = 1; i <= 9; i++) {
        result[i] = 0;
    }

    // Count how many numbers are divisible by 1 to 9
    for (const num of numbers) {
        for (let i = 1; i <= 9; i++) {
            if (num % i === 0) {
                result[i]++;
            }
        }
    }

    console.log("Output:", result);
    rl.close();
});
