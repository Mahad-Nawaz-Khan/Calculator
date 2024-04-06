"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
console.log("\n");
var q1 = await inquirer_1.default.prompt([{
        message: "First Value",
        type: "number",
        name: "first",
        prefix: chalk_1.default.green("% "),
    },
    {
        message: "Second Value",
        type: "number",
        name: "second",
        prefix: chalk_1.default.green("% "),
    },
    {
        message: "What operation do you want to use? \n\n",
        type: "list",
        name: "options",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulo"],
        prefix: chalk_1.default.green("# "),
    }]);
if (q1.options === "Addition") {
    var ans = q1.first + q1.second;
    console.log(chalk_1.default.yellowBright("\n" + ans.toFixed(2)));
}
else if (q1.options === "Subtraction") {
    var ans = q1.first - q1.second;
    console.log(chalk_1.default.yellowBright("\n" + ans.toFixed(2)));
}
else if (q1.options === "Multiplication") {
    var ans = q1.first * q1.second;
    console.log(chalk_1.default.yellowBright("\n" + ans.toFixed(2)));
}
else if (q1.options === "Division") {
    var ans = q1.first / q1.second;
    console.log(chalk_1.default.yellowBright("\n" + ans.toFixed(2)));
}
else if (q1.options === "Modulo") {
    var ans = q1.first % q1.second;
    console.log(chalk_1.default.yellowBright("\n" + ans.toFixed(2)));
}
