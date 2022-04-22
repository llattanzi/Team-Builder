const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        // call parent constructor
        super();

        this.officeNumber = '';
    }

    async getOfficeNumber() {
        await inquirer.prompt({
            type: 'input',
            name: 'officeNumber',
            message: "Add an office number for the manager."
        })
        .then(({ officeNumber }) => {
            this.officeNumber = officeNumber;
        })
    };

    async getRole() {
        this.role = "Manager";
        this.getOfficeNumber();
    };
}

module.exports = Manager;