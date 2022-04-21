const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(employeeData) {
        // call parent constructor
        super(employeeData);

        this.github = employeeData.github;
    }

    getGithub() {

    };
    
    getRole() {

    };
}

module.exports = Engineer;