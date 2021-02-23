const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('gets Engineer GitHub username', () => {
    const data = {
        name: "Joshua",
        id: 1,
        email: "jmrendon48@gmail.com",
        username: 'jmrendon48'
    };
    const engineer = new Engineer(data);

    expect(engineer.username).toBe('jmrendon48');
});

test('gets Engineer role', () => {
    const data = {
        name: "Joshua",
        id: 1,
        email: "jmrendon48@gmail.com",
        username: 'jmrendon48'
    };
    const engineer = new Engineer(data);

    expect(engineer.role).toBe('Engineer');
});