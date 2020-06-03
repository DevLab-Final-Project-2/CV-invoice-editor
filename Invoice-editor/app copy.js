const express = require('express')
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema
const PORT = process.env.PORT || 3128;

const app = express();

var invoiceSchema = new Schema({
    y_company:  String,
    y_adress: String,
    y_zip: Number,

    //slika?

    client_company:  String,
    cient_adress: String,
    client_zip: Number,

    invoice_num: Number,
    date: { type: Date, default: Date.now },
    due_date: { type: Date },

    item: {
      description: String,
      quantity:  Number,
      rate: Number,
      amount: Number
    },

    notes: String,
    term_con: String,

    sales_tax: Number,
    sub_total: Number,
    total: Number
});

var invoice = mongoose.model('invoice', invoiceSchema);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send("Invoice Editor");
});

app.listen(PORT, function(){
    console.log(`App running on localhost:${PORT}`);
});

