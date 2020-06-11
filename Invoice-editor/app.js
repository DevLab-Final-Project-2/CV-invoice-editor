const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const invoice = require('./db_model');
require('dotenv').config();
const PORT = process.env.PORT || 3128;

const userRouter = require('./routes/user');
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send("Invoice Editor");
});

app.listen(PORT, function(){
    console.log(`App running on localhost:${PORT}`);
});

