const mongoose = require('mongoose');

const Schema = mongoose.Schema

const sfgCategorySchema = new Schema ({
    sfg_category : {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('SFGCATEGORY', sfgCategorySchema);