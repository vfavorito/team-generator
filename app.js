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
        type:"input",
        name:"manager name",
        message:"What is the name of this teams manager?"
    },
    {
        type:"input",
        name:"manager id",
        message:"What is the manager's ID number?",   
    },
    {
        type:"input",
        name:"manager email",
        message:"What is the manager's email address?",   
    },
    {
        type:"input",
        name:"manager office number",
        message:"What is the manager's office number?",   
    }

]);
const engineerInfo = () => 
inquirer.prompt([
    {
        type:"input",
        name:"engineer name",
        message:"What is the name of this engineer?"
    },
    {
        type:"input",
        name:"engineer id",
        message:"What is this engineer's ID number?",   
    },
    {
        type:"input",
        name:"engineer email",
        message:"What is this engineer's email address?",   
    },
    {
        type:"input",
        name:"engineer github",
        message:"What is this engineer's Github Username?",   
    }

]);
const InternInfo = () => 
inquirer.prompt([
    {
        type:"input",
        name:"Intern name",
        message:"What is the name of this Intern?"
    },
    {
        type:"input",
        name:"Intern id",
        message:"What is this Intern's ID number?",   
    },
    {
        type:"input",
        name:"Intern email",
        message:"What is this Intern's email address?",   
    },
    {
        type:"input",
        name:"Intern school",
        message:"What school does this intern attend?",   
    }

]);
const addTeamMember = () =>
inquirer.prompt([{
    type:"confirm",
    name:"add member",
    message:"Do you want to add another team member?",
    default:"false"
}
]);
const internOrEngineer = () =>
inquirer.prompt([{
    type:"list",
    name:"intern or engineer",
    message:"Is this team member an Intern or an Engineer?",
    choices:["Intern","Engineer"]
}]);



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
