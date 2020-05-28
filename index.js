const fs = require("fs")

const inquirer = require("inquirer");
const makeMarkdown = require("./utils/generateMarkdown")
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project?"
    },
    {
        type: "input",
        name: "install",
        message: "How do you install project?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "How to use your project?"

    },
    {
        type: "list",
        name: "license",
        message: "How is your project licensed?",
        choices: ["MIT", "Apache 2.0", "GNU", "none"]
    },
    {
        type: "input",
        name: "contribute",
        message: "How do you contribute to the project?"

    },
    {
        type: "input",
        name: "test",
        message: "How do you test the project?",
        default: "npm run test"
    },
    {
        type: "input",
        name: "email",
        message: "please provide email?"

    },
];



function init() {
    inquirer.prompt(questions)
    .then(answers=>{
        fs.writeFile("testReadme.md", makeMarkdown(answers),err=>{
            if(err) throw err
            console.log("markdown made")
        })
    })
    .catch(err=> console.log(err))
}

init();
