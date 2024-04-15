#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\t\n");
function getUserInput(message) {
    return inquirer.prompt({
        message: message,
        type: "input",
        name: "input",
        prefix: chalk.green("% "),
        validate: (input) => {
            const value = parseFloat(input);
            if (!isNaN(input)) {
                return true;
            }
            else {
                return "Please enter a valid number.";
            }
        }
    }).then((answers) => {
        return parseFloat(answers.input);
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
    console.log(chalk.italic.bold("First value:"), chalk.bold.rgb(126, 191, 160)(firstValue));
    console.log(chalk.italic.bold("Second value:"), chalk.bold.rgb(126, 191, 160)(secondValue));
    console.log(chalk.italic.bold("Operation:"), chalk.bold.rgb(111, 51, 145)(operation));
    console.log(chalk.bold("\nResult: ", chalk.yellowBright(result)));
}
calculate();
