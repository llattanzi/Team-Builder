const inquirer = require('inquirer');

class Employee {
    // construct an instance of this class with properties shared between all employee types
    constructor() {
        this.name = '';
        this.id = '';
        this.email = '';
        this.role = '';
    }

    getName(role) {
        const question = {
            type: 'input',
            name: 'name',
            message: "What is the " + role + "'s name?"
        };
        return question
    };

    getId(role) {
        const question = {
            type: 'input',
            name: 'id',
            message: "Please enter the " + role + "'s employee ID."
        };
        return question
    };

    getEmail(role) {
        const question = {
            type: 'input',
            name: 'email',
            message: "Enter the " + role + "'s email"
        };
        return question
    };

    getRole(role = "Employee") {
        this.role = role;
        return this.role
    };
}

module.exports = Employee;