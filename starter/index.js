const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// const writeFileAsync = util.promisify(fs.writeFile); 

// array of questions for user to answer to create the basic stracture of the readme
const questions = [
    inquirer.prompt ([
        {
        type: "input",
        name:"title",
        message: "What is the title called ?"
    },
    
    {
        type: "input",
        name:"author",
        message: "What is your name ?"
    },
    
    {
        type: "input",
        name:"github",
        message: "What is your github name?"
    },
    
    {
        type: "input",
        name:"email",
        message: "What is your email address?"
    },

    {
        type: "input",
        name:"installation",
        message: "Any requirements for the installation",
    },

    {
        type: "input",
        name:"description",
        message: "A brief description of the project please",
    },


    {
        type: "input",
        name:"usage",
        message: "What is the this applications intended use? To put it simply what is this designed to do xD?",
    },


    {
        type: "input",
        name:"contributing",
        message: "Was there any significant contribution to this project ?",
    },


    {
        type: "list",
        name:"license",
        message: "what licence did you use?",
        choices: ["MIT","Apache license 2.0","Creative Commons Attribution 4.0", "The GPL Licence", "GNU License",]	

    }

    

    ]

    )
];

// function to write README file
function writeToFile(fileName, data) {
    




}

// function to initialize program
function init() {

}

// function call to initialize program
init();
