const readline = require("readline");

class Calculator {
    constructor(a, b, operation) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.operation = operation.toLowerCase();
    }

    calculate() {
        switch (this.operation) {
            case "+":
            case "+":
                return this.a + this.b;

            case "-":
            case "-":
                return this.a - this.b;

            case "*":
            case "*":
                return this.a * this.b;

            case "/":
            case "/":
                if (this.b === 0) {
                    return "Error: Cannot divide by zero";
                }
                return this.a / this.b;

            default:
                return "Error: Invalid operation";
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter first number (a): ", (a) => {
    rl.question("Enter second number (b): ", (b) => {
        rl.question("Enter operation (+, -, *, /): ", (operation) => {
            const calculator = new Calculator(a, b, operation);
            const result = calculator.calculate();
            console.log("Result:", result);
            rl.close();
        });
    });
});
