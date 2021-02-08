const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const readycupcakeSchema = new Schema({
    name:String,
    picture:String
}, {
    collection:'readycupcakes'
});

const readycupcakeData = mongoose.model("readycupcakes", readycupcakeSchema);

module.exports = readycupcakeData;