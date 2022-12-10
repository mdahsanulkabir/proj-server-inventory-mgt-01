const mongoose = require('mongoose');

const Schema = mongoose.Schema

const sfgBOMSchema = new Schema({
    object_id: {              //? this will come from SAP provided id
        type: String,
        required: true
    },
    source_category : {
        type: String,
        enum: ["F", "3rd-Plastic", "3rd-Sheet"],
        required: true
    },
    sis_code: {
        type: String,
        required: true
    },
    material_name: {
        type: String,
        required: true
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