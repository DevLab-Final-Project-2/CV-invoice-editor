const Cv = require("../models/cv");
const Cv_fields = require("../models/cv_fields");
const BaseController = require("./base");

class CvController extends BaseController {
    constructor() { 
      super(Cv);
    }
  }
class Cv_filedsController extends BaseController {
    constructor() { 
      super(Cv_fields);
    }
  }

module.exports = {
    CvController,
    Cv_filedsController
}