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
        // requirsred: true,
        default: "somebody@somewhere.com"
    },
    supplierAddress: {
        type: String,
        required: true,
        default: "Somewhere"
    },
    supplierContactPerson : {
        type : String,
        required: true,
        default: "Someone"
    },
    supplierContactPersonPhoneNumber : {
        type: Number,
        default: "9999999999"
    },
    supplierCategory : {
        type: String,
        enum: {
        values: ['local', '3rd Party', 'import'],
        }
    }
}, { timestamps: true })

module.exports = mongoose.model('SUPPLIER', supplierSchema);