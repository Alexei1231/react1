const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
        id:integer,
        name: String,
        place_of_living: String,
        work:String,
        
    });

module.exports = mongoose.model("Human", Human);