const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/EmployeeDB', {useNewUrlParser: true}, function (err) {
    if (err) throw err
    else console.log("Db Connected Successfully!");
});

require('./AppSchema');