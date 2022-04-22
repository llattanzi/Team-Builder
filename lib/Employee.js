const inquirer = require('inquirer');

class Employee {
    // construct an instance of this class with properties shared between all employee types
    constructor() {
        this.name = '';
        this.id = '';
        this.email = '';
        this.role = 'Employee';
    }

    getName() {
        inquirer
            .prompt({
                type: 'input',
                name: 'name',
                message: "What is the employee's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
            })
            .then(({name}) => {
                this.name = name;
            })
    };

    getId() {
        inquirer
            .prompt({
                type: 'input',
                name: 'id',
                message: "Please enter an employee ID.",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter an ID!');
                        return false;
                    }
                }
            })
            .then(({id}) => {
                this.id = id;
            })
    };

    getEmail() {
        inquirer
            .prompt({
                type: 'input',
                name: 'email',
                message: "Enter the employee's email"
            })
            .then(({email}) => {
                this.email = email;
            })
    };

    getRole(role = "Employee") {
        this.role = role;
    };
}

module.exports = Employee;