const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/employee");

let employees = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const promptManager = () =>
    inquirer.prompt([
    //These questions are what everyone will get. Starting with the manager. Maybe chain this as a promise?
        {
            type: 'input',
            message: "What is your name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is your employee ID?",
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
            message: "What is your team manager's office number?",
            name: 'officeNumber',
            when: (answer) => answer.role === 'Manager',
        },
    ]).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.oficeNumber);
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
            message: "Would you like to add an Employee or Intern? Or would you like to finish building your team?",
            name: 'menu',
            choices: ['Employee', 'Intern', 'Build My Team'],
        },
    ])
    //After the manager enters their office number, the menu of choices pops up.
        
    //If the manager chooses Build My Team, then we exit and execute the render function.
const makeEmployee = () =>
    inquirer.prompt([
    //These questions are what everyone will get. Starting with the manager. Maybe chain this as a promise?
        {
            type: 'input',
            message: "What is your name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is your employee ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'github',
        },
    ]).then((data) => {
        const emp = new Employee(data.name, data.id, data.email, data.github);
        employees.push(emp);
        makeTeam();
    })
    //This is the Intern question.
        {
            type: 'input',
            message: "What school do you attend?",
            name: 'school',
        },
    ]);



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
