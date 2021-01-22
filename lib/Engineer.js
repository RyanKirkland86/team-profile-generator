// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require(".employee");

class Engineer extends Employee {
    constructor (github) {
        this.github = github;
    
    }

    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
    }; //overridden to return 'Engineer'

}

module.exports = Engineer