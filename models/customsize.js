const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const sizeSchema = new Schema({
    size:Number
}, {
    collection:'customsize'
});

const sizeData = mongoose.model("customsize", sizeSchema);

module.exports = sizeData;