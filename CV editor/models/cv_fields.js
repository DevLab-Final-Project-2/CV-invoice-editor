const mongoose = require('mongoose');


const cv_fields = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      cv_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cv"
    }
    })
    cv_fields.index({name: 1, cv_id: 1}, {unique: true});
    

module.exports = mongoose.model('cv_fields', cv_fields);