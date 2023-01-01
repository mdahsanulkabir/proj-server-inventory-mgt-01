const mongoose = require('mongoose');

const Schema = mongoose.Schema

const isolationSchema = new Schema({
    itemObjectId : {
        type: Schema.Types.ObjectId,
        refPath: 'item_model_type',
        required : true,
    },
    item_model_type : {
        type : String,
        enum: ['RM','SFGBOM'],
        required: true
    },
    currentLocationId : {
        type: Schema.Types.ObjectId,
        refPath: 'location_model_type',
        required : true,
    },
    location_model_type : {
        type : String,
        enum: ['WAREHOUSE'],
        required: true
    },
    dateOfEntry : {
        type : Date,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    isolationReason : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'ISOLATIONREASON',
        required : true
    },
    isolationReasonDescription : {
        type : String
    },
    isolationUpdates : [{
        updateRecordDate : {
            type : Date,
            required : true
        },
        updateDescription : {
            type : String
        }
    }],
    isolationStatus : {
        type : String,
        enum : ['OPEN', 'CLOSED']
    }

}, { timestamps: true })

module.exports = mongoose.model('ISOLATION', isolationSchema)