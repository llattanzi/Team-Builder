const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        // call parent constructor
        super();

        this.school = '';
    }

    getSchool() {
        const question ={
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?"
        };
        return question
    };
    
    getRole() {
        this.role = "Intern";
        return this.role
    };
}

module.exports = Intern;