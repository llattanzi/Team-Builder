const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// create an empty array to store all generated employees
const employees = [];

const promptMenu = () => {
    inquirer.prompt({
            type: 'list',
            name: 'role',
            message: "Would you like to add an engineer or intern to the team?",
            choices: ['Engineer', 'Intern', 'Finish building my team'],
            default: 2
        })
        .then(({ role }) => {
            if (role === 'Engineer') {
                addEngineer();
            }
            else if (role === 'Intern') {
                addIntern();
            }
            else {
                console.log("Your team is complete.")
            }
        })
}

console.log(promptManager())