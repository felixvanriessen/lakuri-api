const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const fillingSchema = new Schema({
    filling:String,
    options:[Array]
}, {
    collection:'customfilling'
});

const fillingData = mongoose.model("customfilling", fillingSchema);

module.exports = fillingData;