const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const shapeSchema = new Schema({
    shape:String
}, {
    collection:'customshape'
});

const shapeData = mongoose.model("customshape", shapeSchema);

module.exports = shapeData;