const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        // call parent constructor
        super();

        this.github = '';
    }

    getGithub() {
        const question = {
            type: 'input',
            name: 'github',
            message: "Enter the Engineer's GitHub username"
        };
        return question
    };
    
    getRole() {
        this.role = "Engineer";
        return this.role
    };
}

module.exports = Engineer;