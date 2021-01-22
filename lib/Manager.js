// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor (officeNumber) {
        this.officenumber = officeNumber;
    
    }

    getOfficeNumber();

    getRole(); //overridden to return 'Manager'

}