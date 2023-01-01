const mongoose = require('mongoose')

const Schema = mongoose.Schema

const skuSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: false
    },
    active : {
        type : Boolean,
        default: true
    },
    skuCategory : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "SKUCATEGORY",
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('SKU', skuSchema)
