const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var mongoose = require('mongoose');
const invoice = require('./models/db_model');
require('dotenv').config();
const PORT = process.env.PORT || 3128;

const userRouter = require('./routes/user');
const invoiceRouter = require('./routes/invoice');

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(invoiceRouter);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send("Invoice Editor");
});

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/invoice");
  };

  var db = mongoose.connection;

app.listen(PORT, function(){
    console.log(`App running on localhost:${PORT}`);
});

