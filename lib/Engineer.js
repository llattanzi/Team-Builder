const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        // call parent constructor
        super();

        this.github = '';
    }

    async getGithub() {
        await inquirer.prompt({
            type: 'input',
            name: 'github',
            message: "Enter the Engineer's GitHub username"
        })
        .then(({ github }) => {
            this.github = github;
        })
    };
    
    async getRole() {
        this.role = "Engineer";
    };
}

module.exports = Engineer;