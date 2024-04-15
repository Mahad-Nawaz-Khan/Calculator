#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\n");
function getUserInput(message) {
    return inquirer.prompt({
        message: message,
        type: "number",
        name: "input",
        prefix: chalk.green("% "),
    }).then((answers) => {
        return answers.input;
    });
}
function getOperation() {
    return inquirer.prompt({
        message: "What operation do you want to use?",
        type: "list",
        name: "operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulo"],
        prefix: chalk.green("# "),
    }).then((answers) => {
        return answers.operation;
    });
}
async function calculate() {
    let firstValue;
    let secondValue;
    do {
        firstValue = await getUserInput("Enter the first value:");
    } while (isNaN(firstValue));
    do {
        secondValue = await getUserInput("Enter the second value:");
    } while (isNaN(secondValue));
    const operation = await getOperation();
    let result;
    switch (operation) {
        case "Addition":
            result = firstValue + secondValue;
            break;
        case "Subtraction":
            result = firstValue - secondValue;
            break;
        case "Multiplication":
            result = firstValue * secondValue;
            break;
        case "Division":
            if (secondValue === 0) {
                console.log(chalk.red("Error: Division by zero!"));
                return;
            }
            result = firstValue / secondValue;
            break;
        case "Modulo":
            result = firstValue % secondValue;
            break;
        default:
            console.log(chalk.red("Error: Invalid operation!"));
            return;
    }
    console.log("\n");
    console.log("First value:", firstValue);
    console.log("Second value:", secondValue);
    console.log("Operation:", chalk.yellow(operation));
    console.log(chalk.yellowBright("\nResult: " + result.toFixed(2)));
}
calculate();
