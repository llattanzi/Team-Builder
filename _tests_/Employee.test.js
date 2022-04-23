const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();

    expect(employee.name).toBe('');
    expect(employee.id).toBe('');
    expect(employee.email).toBe('');
    expect(employee.role).toBe('');
});

test("gets prompt question input for employee name", () => {
    const employee = new Employee();

    const question = employee.getName('Engineer');
    expect(question.type).toBe('input');
    expect(question.name).toBe('name');
    expect(question.message).toBe("What is the Engineer's name?");
});

test("gets prompt question input for employee id", () => {
    const employee = new Employee();

    const question = employee.getId('Engineer');
    expect(question.type).toBe('input');
    expect(question.name).toBe('id');
    expect(question.message).toBe("Please enter the Engineer's employee ID.");
});

test("gets prompt question input for employee email", () => {
    const employee = new Employee();

    const question = employee.getEmail('Engineer');
    expect(question.type).toBe('input');
    expect(question.name).toBe('email');
    expect(question.message).toBe("Enter the Engineer's email");
});

test("Returns the Employee role, defaults to 'Employee' with no input", () => {
    const employee = new Employee();

    employee.getRole();
    expect(employee.role).toBe('Employee');
});