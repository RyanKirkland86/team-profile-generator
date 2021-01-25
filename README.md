# Team Profile Generator

## Project:

This project is a Node.js command line application that dynamically generates an HTML page populated with employee info cards for a company's work team. The user runs Node.js in terminal/GitBash and encounters a series of prompts that then takes the user's answers to create the page.

<br>

![Image](https://github.com/RyanKirkland86/team-profile-generator/blob/main/Assets/Sample%20Team%20Page.jpg)

[VideoDEMO](https://github.com/RyanKirkland86/team-profile-generator/blob/main/Assets/Team%20Profile%20Generator%20DEMO%20Video.mov)

<br>

## Technologies Used:
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [JSON](https://www.json.org/json-en.html)
- [Inquirer.js](https://www.npmjs.com/package/inquirer)
- [Jest](https://jestjs.io/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Installation:

To install the necessary dependencies, open Terminal/GitBash and enter these commands in the command line:

```
npm install inquirer

npm install jest
```

## Process:

After installing the neccessary packages, run this code in the command line:

```
node app.js
```

The user will then receive a series of questions to build out their team profile. Every profile will have these questions, no matter the role:

```javascript
inquirer.prompt([
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
```

While they are wrapped in separate classes, each job role has its own unique question. Manager has office number, Engineer has GitHub username, and Intern has school attending.

Each of these job roles are defined as separate functions that are triggered based off the manager's choice for building out their team.

```javascript
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
```

When the manager has built out their team, they can choose the "Build My Team" option, and then a team.html file is generated with all of their team profiles in one HTML page.


## Authors:
- Ryan Kirkland
- [GitHub](https://github.com/RyanKirkland86)
- [LinkedIn](https://www.linkedin.com/in/ryan-kirkland-619942200/)
- [Contributors](https://bootcamp.berkeley.edu/coding/)

## License:
This project is licensed under the MIT License.

## Acknowledgements:
Thank you to UCB Extension for the help with this project.