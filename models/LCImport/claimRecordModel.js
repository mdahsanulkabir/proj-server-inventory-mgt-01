const mongoose = require('mongoose');

const Schema = mongoose.Schema

const claimRecordSchema = new Schema({

    partId : {
        type: Schema.Types.ObjectId,
        refPath: 'model_type',
        required : true,
    },
    model_type : {
        type : String,
        enum: ['RM','SFGBOM'],
        required: true
    },
    isolationId : {
        type: Schema.Types.ObjectId,
        ref : 'ISOLATION'
    },
    dateOfEntry : {
        type : Date,
        required : true
    },
    claimQuantity : {
        type : Number
    },
    receiveQty : {
        type : Number
    },
    failedToReceived : {
        type : Number
    },

    // if claimqty - rcv qty = 0 , then claim will be closed
    // if claimqty - rcv qty - fail to receive qty = 0, the claim will be closed

    claimStatus : {
        type : String,
        enum : ['OPEN', 'CLOSED']
    }

}, { timestamps: true })

module.exports = mongoose.model('CLAIMRECORD', claimRecordSchema)