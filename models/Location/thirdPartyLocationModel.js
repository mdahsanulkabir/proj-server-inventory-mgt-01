const mongoose = require('mongoose')

const Schema = mongoose.Schema

const thirdPartyLocationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('THIRDPARTYLOCATION', thirdPartyLocationSchema)