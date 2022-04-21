class Employee {
    // construct an instance of this class with properties shared between all employee types
    constructor(employeeData) {
        this.name = employeeData.name;
        this.id = employeeData.id;
        this.email = employeeData.email;
    }

    getName() {

    };

    getId() {

    };

    getEmail() {

    };

    getRole(role = "Employee") {
        this.role = role;
    };
}

module.exports = Employee;