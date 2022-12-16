//main purpose of using a phantom model is to declare the substitute parts

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const phantomPartSchema = new Schema({
    object_id: {
        type: String,
        required: true
    },
    material_name: {
        type: String,
        required: true
    },
    source_category : {
        type: Schema.Types.ObjectId,
        ref: "SFGSOURCECATEGORY",
        required: true
    },
    sfg_category: {
        type: Schema.Types.ObjectId,
        ref: "SFGCATEGORY",
        required: true
    },
    sap_code: {
        type: String,
        required: true
    }, 
    sis_code: {
        type: String,
        required: true
    },
    substitutes : [ {
        object_id : {
            type: Schema.Types.ObjectId,
            refPath: 'children.model_type',
            required : true,
        },
        model_type : {
            type : String,
            enum: ['RM','SFGBOM'],
            required: true
        }
    }]
}, { timestamps: true })

module.exports = mongoose.model('PHANTOMPART', phantomPartSchema);