// bringing in our employee class
const Employee = require("../classes/employee");
// creating a sub class of employee and adding an officeNumber variable
class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        if(typeof this.officeNumber !== "number" || !this.officeNumber.toString().trim().length){
            throw new Error("Office Number was either not entered or not a number!");
        }
        return this.officeNumber
    }
    getRole(){
        return "Manager"
    }
}
//exporting the manager class
module.exports = Manager