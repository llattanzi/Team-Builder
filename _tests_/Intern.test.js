const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern();

    expect(intern.name).toBe('');
    expect(intern.id).toBe('');
    expect(intern.email).toBe('');
    expect(intern.role).toBe('');
    expect(intern.school).toBe('');
});

test("gets prompt question input for intern's GitHub username", () => {
    const intern = new Intern();

    const question = intern.getSchool();
    expect(question.type).toBe('input');
    expect(question.name).toBe('school');
    expect(question.message).toBe("What school does the intern attend?");
});

test("Returns the intern role", () => {
    const intern = new Intern();

    intern.getRole();
    expect(intern.role).toBe('Intern');
});