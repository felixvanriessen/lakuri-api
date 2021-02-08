const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const flavourSchema = new Schema({
    flavour:String
}, {
    collection:'customflavour'
});

const flavourData = mongoose.model("customflavour", flavourSchema);

module.exports = flavourData;