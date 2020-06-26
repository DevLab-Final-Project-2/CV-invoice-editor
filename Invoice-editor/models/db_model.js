const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    y_company:  String,
    y_adress: String,
    y_zip: Number,

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
module.exports = mongoose.model('invoice', invoiceSchema);

module.exports.getinvoices = (callback, limit) => {
	invoice.find(callback).limit(limit);
}

