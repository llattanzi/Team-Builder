const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager();

    expect(manager.name).toBe('');
    expect(manager.id).toBe('');
    expect(manager.email).toBe('');
    expect(manager.role).toBe('');
    expect(manager.officeNumber).toBe('');
});

test("gets prompt question input for manager's office number", () => {
    const manager = new Manager();

    const question = manager.getOfficeNumber();
    expect(question.type).toBe('input');
    expect(question.name).toBe('officeNumber');
    expect(question.message).toBe("Add an office number for the manager.");
});

test("Returns the manager role", () => {
    const manager = new Manager();

    manager.getRole();
    expect(manager.role).toBe('Manager');
});