const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fgProdSchema = new Schema({
    sku: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    quantity : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
}, { timestamps: true })

module.exports = mongoose.model('FGPROD', fgProdSchema)