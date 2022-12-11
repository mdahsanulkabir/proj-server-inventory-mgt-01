const mongoose = require('mongoose');

const Schema = mongoose.Schema

const sfgSourceCategorySchema = new Schema ({
    source_category : {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('SFGSOURCECATEGORY', sfgSourceCategorySchema);