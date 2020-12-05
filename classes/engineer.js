const Employee = require("../classes/employee");

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
module.exports = Engineer