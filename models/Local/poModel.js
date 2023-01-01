const mongoose = require('mongoose');

const Schema = mongoose.Schema

const poSchema = new Schema({
    poNumber : {
        type : String,
        required : true
    },
    poDate : {
        type : Date
    },
    supplierId : {
        type: Schema.Types.ObjectId,
        ref : "SUPPLIER",
        required : true
    },
    partsOfPO : [ {
        object_id : {
            type: Schema.Types.ObjectId,
            refPath: 'partsOfPO.model_type',
            required : true,
        },
        model_type : {
            type : String,
            enum: ['RM','SFGBOM'],
            required: true
        },
        quantity : {
            type: Number,
            required : true
        },
        unitPrice : {
            type : Number,
            required : true
        },
        pendingQty : {
            type: Number,
            default : function () {
                return this.quantity;
            }
        }
    }]
}, { timestamps: true })

module.exports = mongoose.model('PO', poSchema)