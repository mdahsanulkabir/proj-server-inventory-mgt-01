const mongoose = require('mongoose')

const Schema = mongoose.Schema

const unitSchema = new Schema({
    unitName: {
        type: String,
        required: true,
        unique: true
    },
    unitSymbol: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

module.exports = mongoose.model('UNIT', unitSchema);