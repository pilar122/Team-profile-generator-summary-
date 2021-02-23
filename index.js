const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const fs= require('fs');
// const path= require('path');
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath=path.join(OUTPUT_DIR, "team.html");
// const render=require("./src/page-template");
//const { isDeclareVariable } = require('@babel/types');
const generateSite = require('./src/page-template');
const writeFile = require('./utils/generateSite');



// const promptMember =  () => {
    
//     inquirer.prompt ([
//       {
//         type: 'list',
//         name: 'memberType',
//         message: 'What type of team member would you like to add?',
//         choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
//       }
//     ])
//     .then(({memberType}) => {
//         if (memberType === 'Intern') {
//             promptIntern();
//         } else if (memberType === 'Engineer') {
//             promptEngineer();
//         }
//         else { 
//             buildComplete();
//         }
//     })
// };

const promptManager = () => {
    
    console.log(`Please build your team`);
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is your team manager's name? (Required)",
        validate: nameInput => 
            {
                if (nameInput) {
                return true;
                } else {
                console.log("Please enter your team manager's name!");
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'id',
        message: "What is your team manager's id (Required)",
        validate: idInput => 
            {
                if (idInput) {
                return true;
                } else {
                console.log("Please enter your team manager's ID!");
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'email',
        message: "What is your team manager's e-mail (Required)",
        validate: emailInput => 
            {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's e-mail!");
                    return false;
                }
            }
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: "What is your team manager's office Number (Required)",
        validate: emailInput => 
            {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's office Number!");
                    return false;
                }
            }
        }
        
    ])
    .then(allEmployees => {
        const{name, id, email, officeNumber} = allEmployees
        employee = new Manager(name, id, email, officeNumber);
        //rray.push(answers.id);
        let role = {role: "Manager"};
        return {...allEmployees, ...role}
    })
};


const promptOthers = allEmployees => {
    if (!allEmployees.engineers) {
        allEmployees.engineers = [];
    }
    if(!allEmployees.interns) {
        allEmployees.interns = [];
    }
    return inquirer.prompt 
        ([
            {
                type: 'list',
                name: 'role',
                message: 'What type of team member would you like to add?',
                choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
            }
        ]).then(({ role }) => {
            if (role === "Engineer") {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is your engineer's name? (Required)",
                        validate: nameInput => 
                            {
                                if (nameInput) 
                                {
                                return true;
                                } else 
                                {
                                console.log("Please enter your engineer's name!");
                                return false;
                                }
                            }
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What is your engineer's id (Required)",
                        validate: idInput => 
                            {
                                if (idInput) 
                                {
                                return true;
                                } else 
                                {
                                console.log("Please enter your engineer's ID!");
                                return false;
                                }
                            }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is your engineer's e-mail (Required)",
                        validate: emailInput => 
                            {
                                if (emailInput) 
                                {
                                    return true;
                                } else 
                                {
                                    console.log("Please enter your engineer's email!");
                                    return false;
                                }
                            }
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is your engineer's github username(Required)",
                        validate: githubInput => 
                            {
                                if (githubInput) 
                                {
                                    return true;
                                } else 
                                {
                                    console.log("Please enter your engineer's github username!");
                                    return false;
                                }
                            }
                    }
            ]).then(othersData => {
                others = new Engineer(othersData.name, othersData.id, othersData.email, othersData.github);
                let role = {role: "Engineer"}
                allEmployees.engineers.push({...othersData,...role})
                // idArray.push(answers.id);
                return promptOthers(allEmployees);
            })
        } else if (role === "Intern") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is your intern's name? (Required)",
                    validate: nameInput => {
                        if (nameInput) {
                        return true;
                        } else {
                        console.log("Please enter your intern's name!");
                        return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is your intern's id (Required)",
                    validate: idInput => {
                        if (idInput) {
                        return true;
                        } else {
                        console.log("Please enter your intern's ID!");
                        return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is your intern's e-mail (Required)",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's email!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What is your intern's school (Required)",
                    validate: schooInput => {
                        if (schooInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's school!");
                            return false;
                        }
                    }
                }]).then(othersData => {
                    othersData = new Intern(othersData.name, othersData.id, othersData.email, othersData.school)
                    let role = {role: "Intern"}
                    allEmployees.interns.push({...othersData,...role})
                    return promptOthers(allEmployees)
                })
        } else {
        return allEmployees
        }
    })
};

// const buildComplete = () => {
    
//     if (!fs.existsSync(OUTPUT_DIR)){
//         fs.mkdirSync(OUTPUT_DIR)
//     }
//     fs.writeFileSync(outputPath,render(allManagers,allEngineers,allInterns), "utf-8");
// }

promptManager()
    .then(promptOthers)
    .then(allEmployees => {
        return generateSite(allEmployees);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log("----------------------------")
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });
    