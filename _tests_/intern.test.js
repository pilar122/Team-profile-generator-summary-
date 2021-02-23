const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('gets Intern school', () => {
    const data = {
        name: "Joshua",
        id: 1,
        email: "jmrendon48@gmail.com",
        school: 'UCLA Extension'
    };
    const intern = new Intern(data);

    expect(intern.school).toBe('UCLA Extension');
});

test('gets Intern role', () => {
    const data = {
        name: "Joshua",
        id: 1,
        email: "jmrendon48@gmail.com",
        school: 'UCLA Extension'
    };
    const intern = new Intern(data);

    expect(intern.role).toBe('Intern');
});