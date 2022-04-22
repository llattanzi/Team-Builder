const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        // call parent constructor
        super();

        this.school = '';
    }

    async getSchool() {
        await inquirer.prompt({
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?"
        })
        .then(({ school }) => {
            this.school = school;
        })
    };
    
    async getRole() {
        this.role = "Intern";
    };
}

module.exports = Intern;