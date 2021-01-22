// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require(".employee");

class Manager extends Employee {
    constructor (officeNumber) {
        this.officenumber = officeNumber;
    
    }

    getOfficeNumber() {
        return this.officenumber;
    };

    getRole() {
        return 'Manager';
    }; //overridden to return 'Manager'

}

module.exports = Manager