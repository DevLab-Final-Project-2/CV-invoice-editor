const mongoose = require('mongoose');


const cv = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
      },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
    })
    cv.index({name: 1, user_id: 1}, {unique: true});
    

module.exports = mongoose.model('cv', cv);