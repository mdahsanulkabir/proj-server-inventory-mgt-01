const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const lcDetailSchema = new Schema({
    fileNumber : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "LCSUMMARY",
        required: true
    },
    secondarySupplierName : {
        type: String,
        required : true,
        default: "N/A"
    },
    rm_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "RM",
        required: true
    },
    lcQuantity : {
        type : Number,
        required : true
    },
    lcUnit : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "UNIT",
        required: true
    },
    lcUnitPrice : {
        type : Number,
        default : 1
    },
    inventoryUnitConversion : {
        type : Number,
        default : 1
    }

}, { timestamps: true })

module.exports = mongoose.model('LCDETAIL', lcDetailSchema)