const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const invoice = require('./db_model');
const PORT = process.env.PORT || 3128;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send("Invoice Editor");
});

app.listen(PORT, function(){
    console.log(`App running on localhost:${PORT}`);
});

