// base class that all team members will have
class Employee{
// setting the base info for all team members
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
//methods for getting team members base info, these methods will be passed to all sub-classes of Employee
Employee.prototype.getName = function(){
    if(typeof this.name !== "string" || !this.name.trim().length){
        throw new Error("Name was either not entered or not a string!");
    }
    return this.name;
}
Employee.prototype.getId = function(){
    if(typeof this.id !== "number" || !this.id.toString().trim().length){
        throw new Error("ID was either not entered or not a number!");
    }
    return this.id;
}
Employee.prototype.getEmail = function(){
    if(typeof this.email !== "string" || !this.email.trim().length){
        throw new Error("Email was either not entered or not a string!");
    }
    return this.email;
}
Employee.prototype.getRole = function(){
    return "Employee";
}

//exporting this class
module.exports = Employee;