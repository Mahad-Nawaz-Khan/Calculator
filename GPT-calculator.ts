import inquirer from "inquirer";
import chalk from "chalk";

console.log("\n");

function getUserInput(message: string): Promise<number> {
    return inquirer.prompt({
        message: message,
        type: "number",
        name: "input",
        prefix: chalk.green("% "),
        
    }).then((answers: { input: number }) => {
        return answers.input;
    });
}

function getOperation(): Promise<string> {
    return inquirer.prompt({
        message: "What operation do you want to use?",
        type: "list",
        name: "operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulo"],
        prefix: chalk.green("# "),
    }).then((answers: { operation: string }) => {
        return answers.operation;
    });
}

async function calculate(): Promise<void> {
    let firstValue: number;
    let secondValue: number;

    do {
        firstValue = await getUserInput("Enter the first value:");
    } while (isNaN(firstValue));

    do {
        secondValue = await getUserInput("Enter the second value:");
    } while (isNaN(secondValue));

    const operation: string = await getOperation();

    let result: number;

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
