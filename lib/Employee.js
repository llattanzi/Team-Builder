const inquirer = require('inquirer');

class Employee {
    // construct an instance of this class with properties shared between all employee types
    constructor() {
        this.name = '';
        this.id = '';
        this.email = '';
        this.role = 'Employee';
    }

    async getName() {
        await inquirer
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
                this.getId();
            })
    };

    async getId() {
        await inquirer
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
                this.getEmail();
            })
    };

    async getEmail() {
        await inquirer
            .prompt({
                type: 'input',
                name: 'email',
                message: "Enter the employee's email"
            })
            .then(({email}) => {
                this.email = email;
                this.getRole();
            })
    };

    getRole(role = "Employee") {
        this.role = role;
    };
}

module.exports = Employee;