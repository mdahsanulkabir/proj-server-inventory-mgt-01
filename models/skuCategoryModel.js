const mongoose = require('mongoose')

const Schema = mongoose.Schema

const skuCategorySchema = new Schema({
    skuCategory : {
        type : String,
        required : true
    }
}, { timestamps: true })


module.exports = mongoose.model('SKUCATEGORY', skuCategorySchema);