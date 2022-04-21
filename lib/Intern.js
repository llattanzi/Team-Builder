const Employee = require('./Employee');

class Intern extends Employee {
    constructor(employeeData) {
        // call parent constructor
        super(employeeData);

        this.school = employeeData.school;
    }

    getSchool() {

    };
    
    getRole() {

    };
}

module.exports = Intern;