require('../model/db');
const mongoose = require('mongoose');
var Emp = mongoose.model('reg');

exports.index = function (req, res) {
    res.render("index", {
        title: "Node.js Expess MongoDB CRUD APP"
    });
}

exports.view = function (req, res) {
    res.render("view", {
        title: "Node.js Expess MongoDB CRUD APP"
    });
}

exports.reg = function(req, res) {
    var employeeSchema = new Emp();
    employeeSchema.Fname = req.body.uname;
    employeeSchema.lname = req.body.lname;
    employeeSchema.Email = req.body.email;
    employeeSchema.Mobile = req.body.phone;
    employeeSchema.pass = req.body.pswd;
    console.table(req.body);
    employeeSchema.save(function (err) {
        if (err) throw err
        else res.redirect('/view');
    });
}

exports.viewdata = function viewNow(req,res) {
    Emp.find(function(err,result){
        res.render('view',{
            docs : result,
            title: "Node.js Expess MongoDB CRUD APP"
        });
    });
}

exports.delete = function(req,res){
    Emp.findByIdAndRemove(req.params.id,(err)=>{
    if(err) throw err
        else res.redirect('/view');
    });
}
