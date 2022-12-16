//main purpose of using a phantom model is to declare the substitute parts

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const phantomPartsSchema = new Schema({
    object_id: {
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

module.exports = mongoose.model('PHANTOMPARTS', phantomPartsSchema);