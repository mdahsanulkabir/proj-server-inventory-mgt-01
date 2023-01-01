const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lcSummarySchema = new Schema({
    fileNumber : {
        type: String,
        required : true
    },
    lcNumber : {
        type: String,
        required : true
    },
    lcDate : {
        type: Date,
        required : true
    },
    piNumber : {
        type: String,
        required : true
    },
    primarySupplierName : {
        type: String,
        required : true
    },
    lcValue : {
        type : Number,
        default : 0
    },
    shipmentDate: {
        type: [{
            shipment : {type: Date},
            text: {type: String}
        }],
        required : true,
        default: undefined
    },
    origin : {
        type : String,
        required : true
    },
    factoryETA : {
        type: [{
            eta : {type: Date},
            text: {type: String}
        }],
        required : true,
    },
    presentStatus : {
        type: String,
        default: "Undefined"
    },
    customsCost : {
        type : Number,
        default : 0
    },
    transportCost : {
        type : Number,
        default : 0
    },
    insuranceCost : {
        type : Number,
        default : 0
    },
    lcCommissionCost : {
        type : Number,
        default : 0
    }

}, { timestamps: true })

module.exports = mongoose.model('LCSUMMARY', lcSummarySchema)