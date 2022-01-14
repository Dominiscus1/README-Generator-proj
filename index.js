// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions  = [
    {
      type: "input",
      name: "title",
      message: "Project title?",
    },
    {
      type: "input",
      name: "desc",
      message: "Write a brief summary that explains the purpose and function of this project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide examples of how this application can be used?",
    },
    {
      type: "input",
      name: "tech",
      message: "What technologies did you use to create this project?",
    },
    {
      type: "input",
      name: "preview",
      message: "Link a screenshot of your functional application.",
    },
    {
      type: "input",
      name: "credit",
      message: "List the name of the contributors for this project.",
    },
    {
      type: "input",
      name: "launch",
      message: "Enter the link that connects a user to your application",
    },
    {
      type: "list",
      name: "licenses",
      message: "Choose the license that applies to your project",
      choices: ["MIT", "Apache", "Boost", "Mozilla", "GNU", "No License"],
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
