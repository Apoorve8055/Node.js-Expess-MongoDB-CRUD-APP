const express = require('express');
var app = express();
var root = require('./routes/empRoute');
app.use('/',root);


app.listen(8080,function(){
    console.log("Http://127.0.0.1:8080");
});