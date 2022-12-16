const mongoose = require('mongoose');

const Schema = mongoose.Schema

const sfgBOMSchema = new Schema({
    object_id: {              //? this will come from SAP provided id
        type: String,
        required: true
    },
    source_category : {
        type: Schema.Types.ObjectId,
        ref: "SFGSOURCECATEGORY",
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
    sfg_category: {
        type: Schema.Types.ObjectId,
        ref: "SFGCATEGORY",
        required: true
    },
    material_name: {
        type: String,
        required: true
    },
    obsolete: {
        type: Boolean,
        required: true,
        default: false
    },
    children : [ {
            // new Schema({
            object_id : {
                type: Schema.Types.ObjectId,
                refPath: 'children.model_type',
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
            }
        // })
        }
        ],
    unit: {
        type: String,
        default: 'pcs'
    }
}, { timestamps: true })

module.exports = mongoose.model('SFGBOM', sfgBOMSchema);