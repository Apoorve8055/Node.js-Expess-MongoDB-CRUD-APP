const express = require('express');
var app = express();

var root = require('./routes/empRoute');
app.use(express.static('/views'));
app.set('view engine','ejs');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());
app.use('/',root);
app.use('/emp',root);
app.use('/view',root);
app.use('/delete/:id',root);
app.use('/update/:id',root);
app.use('/search',root);

app.listen(8080,function(){
    console.log("Http://127.0.0.1:8080");
});