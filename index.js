const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// create an empty array to store all generated employees
const employeeList = [];
// prompt for manager info first. employee only happens once per team
let employee = new Manager();

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
                employee = new Engineer();
                buildTeam();
            }
            else if (role === 'Intern') {
                // create Intern obj and run user prompts
                employee = new Intern();
                buildTeam();
            }
            else {
                console.log("Your team is complete.")
                console.log(employeeList)
                return employeeList;
            }
        })
}

const buildTeam = () => {
    const role = employee.getRole();
    // create questions array with common questions. reset questions each run through
    const questions = [employee.getName(role), employee.getId(role), employee.getEmail(role)];

    inquirer
        .prompt(questions)
        .then(({name, id, email}) => {
            employee.name = name;
            employee.id = id;
            employee.email = email;

            if (role === "Manager") {
                inquirer
                    .prompt(employee.getOfficeNumber())
                    .then(({ officeNumber }) => {
                        employee.officeNumber = officeNumber;   
                        // push to employee array
                        employeeList.push(employee);
                        // go to menu (prompt user to add engineers or interns)
                        promptMenu();
                    })
            }
            else if (role === "Engineer") {
                inquirer
                    .prompt(employee.getGithub())
                    .then(({ github }) => {
                        employee.github = github;
                        // push to employee array
                        employeeList.push(employee);
                        // go to menu (prompt user to add engineers or interns)
                        promptMenu();
                    })
            }
            else if (role === "Intern") {
                inquirer
                    .prompt(employee.getSchool())
                    .then(({ school }) => {
                        employee.school = school;
                        // push to employee array
                        employeeList.push(employee);
                        // go to menu (prompt user to add engineers or interns)
                        promptMenu();
                    })
            }
        })
};

buildTeam();