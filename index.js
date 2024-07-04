#! /usr/bin/env node
import inquirer from "inquirer";
console.log("WelLcome to Quiz Game");
let score = 0;
let question1 = await inquirer.prompt([
    {
        name: "Q1",
        type: "list",
        message: "Which is the largest province of Pakistan",
        choices: ["Karachi", "Punjab", "Balochistan", "KPK"],
    }
]);
if (question1.Q1 === "Balochistan") {
    console.log("Welldone! Your answer is correct");
    score++;
}
else {
    console.log("Your answer is wrong");
}
let question2 = await inquirer.prompt([
    {
        name: "Q2",
        type: "list",
        message: "Which language is correct error line by line",
        choices: ["Java", "Typescript", "Python", "C++"],
    }
]);
if (question2.Q2 === "Typescript") {
    console.log("Welldone! Your answer is correct");
    score++;
}
else {
    console.log("Your answer is wrong");
}
let question3 = await inquirer.prompt([
    {
        name: "Q3",
        type: "list",
        message: "Which language has a sound feature",
        choices: ["C++", "Typescript", "Java", "Python"],
    }
]);
if (question3.Q3 === "Python") {
    console.log("Welldone! Your answer is correct");
    score++;
}
else {
    console.log("Your answer is wrong");
}
let question4 = await inquirer.prompt([
    {
        name: "Q4",
        type: "list",
        message: "Which is the capital of Pakistan",
        choices: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    }
]);
if (question4.Q4 === "Islamabad") {
    console.log("Welldone! Your answer is correct");
    score++;
}
else {
    console.log("Your answer is wrong");
}
let question5 = await inquirer.prompt([
    {
        name: "Q5",
        type: "list",
        message: "Which is the largest Ocean in the world",
        choices: ["Red Sea", "Indian", "Atlantc", "Pacific"],
    }
]);
if (question5.Q5 === "Pacific") {
    console.log("Welldone! Your answer is correct");
    score++;
}
else {
    console.log("Your answer is wrong");
}
if (score >= 4) {
    console.log("Congratulation! You are winner in this game");
    console.log(`Your collect score is :${score}`);
}
else {
    console.log("You loss the game, try next game");
    console.log(`Your score is :${score}`);
}
