// bringing in our employee class
const Employee = require("../classes/employee");
// creating a sub class of employee and adding a school variable
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }
    getSchool(){
        if(typeof this.school !== "string" || !this.school.trim().length){
            throw new Error("School was either not entered or not a string!");
        }
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}
//exporting the intern class
module.exports = Intern;