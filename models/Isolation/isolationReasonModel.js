const mongoose = require('mongoose');

const Schema = mongoose.Schema

const isolationReasonSchema = new Schema({
    isolationReason : {
        type : String
    }

}, { timestamps: true })

module.exports = mongoose.model('ISOLATIONREASON', isolationReasonSchema)