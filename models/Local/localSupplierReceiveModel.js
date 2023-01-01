const mongoose = require('mongoose')

const Schema = mongoose.Schema

const localSupplierReceiveSchema = new Schema ({
    supplierShipmentRefenceId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PO'
    },
    partsOrSFGs : [{
        partOrSFGId : {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'partsOrSFGs.model_type',
            required : true
        },
        model_type : {
            type : String,
            enum: ['RM','SFGBOM'],
            required : true
        },
        date : {
            type : Date,
            required : true
        },
        supplierVATChallanQuantity : {
            type : Number,
            required : true
        },
        sisReceiveQty : {
            type : Number,
            required : true
        },
        physicalReceiveQty : {
            type : Number,
            required : true
        },
        anomalyInfo : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'LOCALANOMALY'    //todo anomaly collection yet not created
        }
    }]
}, { timestamps: true })

module.exports = mongoose.model('LOCALSUPPLIERRECEIVE', localSupplierReceiveSchema)