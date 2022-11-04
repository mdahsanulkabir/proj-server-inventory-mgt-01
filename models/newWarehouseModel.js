const mongoose = require('mongoose')

const Schema = mongoose.Schema

const warehouseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    space: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('WAREHOUSE', warehouseSchema)