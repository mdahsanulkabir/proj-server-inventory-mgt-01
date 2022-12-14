const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rmSchema = new Schema({
    object_id: { 
        type: String,
        required: true
    },
    source_category : {
        type: String,
        required: true
    },
    rm_category : {
        type: String
    },
    sis_code: {
        type: String,
        required: true
    },
    material_name: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    sap_code : {
        type: String
    },
    sec_source_category : {
        type: String
    },
    obsolete : {
        type : Boolean,
        default : false
    }
}, { timestamps: true })

module.exports = mongoose.model('RM', rmSchema)

