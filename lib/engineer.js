const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email,github) {
    // call parent constructor here:
    super(name,id,email);
    
    this.github = github;
    
    }

    getGithub () {
        if (this.github) {
           return `${this.github}`;
        }
        return `Please enter a github user name`;
    };

    getRole() {
        return `Engineer`;
    };
}
module.exports = Engineer;