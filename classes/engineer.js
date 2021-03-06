// bringing in our employee class
const Employee = require("../classes/employee");
// new sub-class of employee that adds a github variable 
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }
}
//Engineer class specific methods for getting info
Engineer.prototype.getGithub = function(){
    if(!this.github.trim().length){
        throw new Error("Github username was not entered !");
    }
    return this.github;
}
Engineer.prototype.getRole = function(){
    return "Engineer";
}
// exporting the Engineer class
module.exports = Engineer