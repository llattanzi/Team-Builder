const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer();

    expect(engineer.name).toBe('');
    expect(engineer.id).toBe('');
    expect(engineer.email).toBe('');
    expect(engineer.role).toBe('');
    expect(engineer.github).toBe('');
});

test("gets prompt question input for engineer's GitHub username", () => {
    const engineer = new Engineer();

    const question = engineer.getGithub();
    expect(question.type).toBe('input');
    expect(question.name).toBe('github');
    expect(question.message).toBe("Enter the Engineer's GitHub username");
});

test("Returns the engineer role", () => {
    const engineer = new Engineer();

    engineer.getRole();
    expect(engineer.role).toBe('Engineer');
});