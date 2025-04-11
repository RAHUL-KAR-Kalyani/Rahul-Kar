const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (a): ", (input) => {
    let a = parseInt(input);

    // If input is even, use the previous odd number
    
    if (a % 2 === 0) {
        a = a - 1;
    }

    const result = [];
    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
    }

    console.log("Output:", result.join(", "));
    rl.close();
});
