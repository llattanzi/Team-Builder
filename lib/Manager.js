const Employee = require('./Employee');

class Manager extends Employee {
    constructor(employeeData) {
        // call parent constructor
        super(employeeData);

        this.officeNumber = employeeData.officeNumber;
    }

    getRole() {

    };
}

module.exports = Manager;