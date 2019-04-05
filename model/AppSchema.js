const mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    Fname: {
        type: String
    },
    lname: {
        type: String
    },
    Email: {
        type: String
    },
    Mobile: {
        type: String
    },
    pass:{
        type:String
    }
});

mongoose.model("reg",employeeSchema);