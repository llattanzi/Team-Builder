const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// create an empty array to store all generated employees
const employeeList = [];

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
                // create Engineer obj and run user prompts
                employee = new Engineer().getName().getId().getEmail().getRole().getGithub();
                // add new employee to list
                employeeList.push(employee);
                // go back to menu
                return promptMenu();
            }
            else if (role === 'Intern') {
                // create Intern obj and run user prompts
                employee = new Intern().getName().getId().getEmail().getRole().getSchool();
                // add new employee to list
                employeeList.push(employee);
                // go back to menu
                return promptMenu();
            }
            else {
                console.log("Your team is complete.")
                console.log(employeeList)
                return employeeList;
            }
        })
}

const startTeam = () => {
    // prompt for manager info first. this only happens once per team
    let employee = new Manager().getName();
    // push manager to employee array
    employeeList.push(employee);
    // go to menu (prompt user to add engineers or interns)
    promptMenu();
};

startTeam();