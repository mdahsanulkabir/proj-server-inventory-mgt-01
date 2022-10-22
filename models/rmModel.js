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
        type: String,
        required: false
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
    }
}, { timestamps: true })

module.exports = mongoose.model('RM', rmSchema)
