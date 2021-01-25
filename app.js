const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const promptManager = () =>

    inquirer.prompt([
    //These questions are what everyone will get. Starting with the manager.
        {
            type: 'input',
            message: "What is your name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is your employee ID number?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email',
        },
    //The next question will be about the manager's office number.
        {
            type: 'input',
            message: "What is your office number?",
            name: 'officeNumber',
        },
    ]).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employees.push(manager);
        console.log(employees);
    //Then the manager needs to decide what role they want to add to their team, or if they want to finish
        makeTeam();
    });

promptManager();

const makeTeam = () =>
    inquirer.prompt([
        {
            type: 'list',
            message: "Would you like to add an Engineer or Intern to your team? Or would you like to finish building your team?",
            name: 'menu',
            choices: ['Engineer', 'Intern', 'Build My Team'],
        },
    ]).then((data) => {
        if (data.menu == 'Engineer') {
            makeEngineer();
        } else if (data.menu == 'Intern') {
            makeIntern();
        } 

        else {
            fs.writeFileSync(outputPath, render(employees), "utf-8");
        }
    });
        

const makeEngineer = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the engineer's ID number?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the engineer's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: 'github',
        },
    ]).then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        employees.push(engineer);
        console.log(employees);
        makeTeam();
    });

const makeIntern = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the intern's ID number?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the intern's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What school does the intern attend?",
            name: 'school',
        },
    ]).then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        employees.push(intern);
        console.log(employees);
        makeTeam();
    });
