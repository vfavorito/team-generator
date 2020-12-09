// bringing in our employee class
const Employee = require("../classes/employee");
// new sub-class of employee that adds a github variable 
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }
    getGithub(){
        if(!this.github.trim().length){
            throw new Error("Github username was not entered !");
        }
        return this.github;
    }
    getRole(){
        return "Engineer"
    }
}
// exporting the Engineer class
module.exports = Engineer