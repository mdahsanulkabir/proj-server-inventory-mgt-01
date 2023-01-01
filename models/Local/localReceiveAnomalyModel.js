const mongoose = require('mongoose')

const Schema = mongoose.Schema

const localReceiveAnomalySchema = new Schema ({
    status : {
        type : Boolean,
        enum : [  ]
    }


}, { timestamps: true })

module.exports = mongoose.model('LOCALANOMALY', localReceiveAnomalySchema)