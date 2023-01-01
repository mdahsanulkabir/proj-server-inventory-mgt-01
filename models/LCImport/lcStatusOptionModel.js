const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lcStatusOptionSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    description : {
        type : String,
        required : true
    }
}, { timestamps: true })


module.exports = mongoose.model('LCSTATUSOPTION', lcStatusOptionSchema)