const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./htmlRenderer");

const teamEmployees = [];

const managerInfo = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of this teams manager?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID number?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?",
        }
    ]).then((responses) => {
        const newManager = new Manager(responses.managerName,parseInt(responses.managerId),responses.managerEmail,parseInt(responses.managerOfficeNumber));
        teamEmployees.push(newManager);
    });

const engineerInfo = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of this engineer?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is this engineer's ID number?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is this engineer's email address?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is this engineer's Github Username?",
        }

    ]).then((responses) => {
        const newEngineer = new Engineer(responses.engineerName,parseInt(responses.engineerId),responses.engineerEmail,responses.engineerGithub);
        teamEmployees.push(newEngineer);
        addTeamMember();
    });

const internInfo = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of this Intern?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is this Intern's ID number?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is this Intern's email address?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does this intern attend?",
        }

    ]).then((responses) => {
        const newIntern = new Intern(responses.internName,parseInt(responses.internId),responses.internEmail,responses.internSchool);
        teamEmployees.push(newIntern);
        addTeamMember();
    });

const addTeamMember = () =>
    inquirer.prompt([{
        type: "confirm",
        name: "addMember",
        message: "Do you want to add another team member?",
        default: "false"
    }
    ]).then((responses) => {
        if (responses.addMember) {
            internOrEngineer();
        }
        else{
            
            fs.writeFile(outputPath,render(teamEmployees),(error) => {if(error) throw error});

        }
    });

const internOrEngineer = () =>
    inquirer.prompt([{
        type: "list",
        name: "internOrEngineer",
        message: "Is this team member an Intern or an Engineer?",
        choices: ["Intern", "Engineer"]
    }]).then((responses) => {
        if(responses.internOrEngineer === "Intern"){
            internInfo();
        }
        else{
            engineerInfo();
        }
    });

const main = async () => {
    
    console.log("Time to make an A-Team!");
    try {
        await managerInfo();
        await addTeamMember();
    }
    catch (error) {
        console.log(error);
    }

}
main();

