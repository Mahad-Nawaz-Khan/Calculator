#! /usr/bin/env node

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

console.log("\n");
console.log("First value:", chalk.magentaBright(q1.first));
console.log("Second value:",chalk.magentaBright(q1.second));
console.log("Operation:", chalk.magentaBright(q1.options));


if(
    q1.options === "Addition")
    {
        let ans: number= q1.first + q1.second;
        console.log("\nResult: " + chalk.yellowBright(ans.toFixed(2)));
    }
    else if(
        q1.options === "Subtraction")
        {
            let ans: number= q1.first - q1.second;
            console.log("\Result: n" + chalk.yellowBright(ans.toFixed(2)));
        }
        else if(
            q1.options === "Multiplication")
            {
                let ans: number= q1.first * q1.second;
                console.log("\nResult: " + chalk.yellowBright(ans.toFixed(2)));
            }
            else if(
                q1.options === "Division")
                {
                    let ans: number= q1.first / q1.second;
                    console.log("\nResult: " + chalk.yellowBright(ans.toFixed(2)));
                }
                else if(
                    q1.options === "Modulo")
                    {
                        let ans: number= q1.first % q1.second;
                        console.log("\nResult: " + chalk.yellowBright(ans.toFixed(2)));
                    }



