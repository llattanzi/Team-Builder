const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        // call parent constructor
        super();

        this.officeNumber = '';
    }

    getOfficeNumber() {
        inquirer.prompt({
            type: 'input',
            name: 'officeNumber',
            message: "Add an office number for the manager."
        })
        .then(({ officeNumber }) => {
            this.officeNumber = officeNumber;
        })
    };

    getRole() {
        this.role = "Manager";
    };
}

module.exports = Manager;