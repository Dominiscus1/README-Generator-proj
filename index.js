// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// array of questions for user input
const questions  = [
    {
      type: "input",
      name: "title",
      message: "Project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief summary that explains the purpose and function of this project?",
    },
    {
      type: "input",
      name: "installation",
      message: "How does someone install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How does the user use this application?",
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
      name: "contributors",
      message: "List the name of the contributors for this project.",
    },
    {
      type: "list",
      name: "license",
      message: "Choose the license that applies to your project",
      choices: ["MIT", "Apache",  "Mozilla", "No License"],
    },
  ];

// function to write README file
function writeFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}
// function to initialize app
function init() {}
  inquirer.prompt(questions)
  .then((answers) => writeFile("README.md", generateMarkdown(answers)))
// Function call to initialize app
init();
