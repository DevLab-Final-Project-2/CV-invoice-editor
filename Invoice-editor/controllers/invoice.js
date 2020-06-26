const Invoice = require("../models/db_model");
const BaseController = require("./base");

class InvoiceController extends BaseController {
    constructor() { 
      super(Invoice);
    }
  }

module.exports = {
    InvoiceController
}