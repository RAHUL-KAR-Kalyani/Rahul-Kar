const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (a): ", (input) => {
    const a = parseInt(input);
    const result = [];

    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1); // generates 1, 3, 5, 7...
    }

    console.log("Output:", result.join(", "));
    rl.close();
});
