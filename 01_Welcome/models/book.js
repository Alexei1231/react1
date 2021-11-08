const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
        name: String,
        authors: String,
        numer_of_pages:Number,
    });

module.exports = mongoose.model("Book", Book);