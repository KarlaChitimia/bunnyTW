const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: {type:String, require:true, unique:true},
    //TO DO: combine duration, movie director -> details
    details: {type :String}, 
    genre: {type : Array},
    releaseDate: {type: Number},
    duration: {type: Number},
    img: {type : Boolean},
    imgThumb: {type : Boolean},
    video: {type : String}

},
{timestamps: true});

module.exports = mongoose.model("Movie", MovieSchema);