require('../model/db');
const mongoose = require('mongoose');
var Emp = mongoose.model('reg');
exports.index = function(req,res){
    res.render("index",{
        title:"Node.js Expess MongoDB CRUD APP"
    });
}

exports.reg = function addEmp(req,res){
    var employeeSchema = new Emp();
    employeeSchema.Fname = req.body.uname;
    employeeSchema.lname =  req.body.lname;
    employeeSchema.Email =  req.body.email;
    employeeSchema.Mobile =  req.body.phone;
    employeeSchema.pass =  req.body.pswd;
    console.table(req.body);
    employeeSchema.save(function(err){
        if(err) throw err
        else res.redirct('/view');
    });
}

