const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        // call parent constructor
        super();

        this.officeNumber = '';
    }

    getOfficeNumber() {
        const question = {
            type: 'input',
            name: 'officeNumber',
            message: "Add an office number for the manager."
        };
        return question
    };

    getRole() {
        this.role = "Manager";
        return this.role
    };
}

module.exports = Manager;