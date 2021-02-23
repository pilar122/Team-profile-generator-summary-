const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');


test('gets Manager office number', () => {
    const data = {
        name: "Joshua",
        id: 1,
        email: "jmrendon48@gmail.com",
        officeNumber: 1
    };
    const manager = new Manager(data);

    expect(manager.officeNumber).toEqual(1);
});

test('gets Manager role', () => {
    const data = {
        name: "Joshua",
        id: 1,
        email: "jmrendon48@gmail.com",
        officeNumber: 1
    };
    const manager = new Manager(data);

    expect(manager.role).toBe('Manager');
});