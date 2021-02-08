const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const readycakeSchema = new Schema({
    name:String,
    picture:String
}, {
    collection:'readycakes'
});

const readycakeData = mongoose.model("readycakes", readycakeSchema);

module.exports = readycakeData;