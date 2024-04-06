import inquirer from "inquirer";
import chalk from "chalk";
console.log("\n");
let q1 = await inquirer.prompt([{
        message: "First Value",
        type: "number",
        name: "first",
        prefix: chalk.green("% "),
    },
    {
        message: "Second Value",
        type: "number",
        name: "second",
        prefix: chalk.green("% "),
    },
    {
        message: "What operation do you want to use? \n\n",
        type: "list",
        name: "options",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulo"],
        prefix: chalk.green("# "),
    }]);
if (q1.options === "Addition") {
    let ans = q1.first + q1.second;
    console.log(chalk.yellowBright("\n\t" + ans.toFixed(2)));
    prefix: chalk.green("ANS");
}
else if (q1.options === "Subtraction") {
    let ans = q1.first - q1.second;
    console.log(chalk.yellowBright("\n\t" + ans.toFixed(2)));
}
else if (q1.options === "Multiplication") {
    let ans = q1.first * q1.second;
    console.log(chalk.yellowBright("\n\t" + ans.toFixed(2)));
}
else if (q1.options === "Division") {
    let ans = q1.first / q1.second;
    console.log(chalk.yellowBright("\n\t" + ans.toFixed(2)));
}
else if (q1.options === "Modulo") {
    let ans = q1.first % q1.second;
    console.log(chalk.yellowBright("\n\t" + ans.toFixed(2)));
}
