const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./htmlRenderer");

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
    ]);

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
        addTeamMember();
    });

const internInfo = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "InternName",
            message: "What is the name of this Intern?"
        },
        {
            type: "input",
            name: "InternId",
            message: "What is this Intern's ID number?",
        },
        {
            type: "input",
            name: "InternEmail",
            message: "What is this Intern's email address?",
        },
        {
            type: "input",
            name: "InternSchool",
            message: "What school does this intern attend?",
        }

    ]).then((responses) => {
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

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
