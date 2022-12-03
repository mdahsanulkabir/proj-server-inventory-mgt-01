const mongoose = require('mongoose')

const Schema = mongoose.Schema

const supplierSchema = new Schema({
    supplierID  :{
        type : String,
        required: true,
        unique: true
    },
    supplierName: {
        type: String,
        required: true,
        unique: true
    },
    supplierEmail: {
        type: String,
        required: true,
        unique: true
    },
    supplierAddress: {
        type: String,
        required: true
    },
    supplierContactPerson : {
        type : String,
        required: true
    },
    supplierContactPersonPhoneNumber : {
        type: Number,
    },
    supplierCategory : {
        type: String,
        enum: {
        values: ['local', '3rd Party', 'import'],
        }
    }
}, { timestamps: true })

module.exports = mongoose.model('SUPPLIER', supplierSchema);