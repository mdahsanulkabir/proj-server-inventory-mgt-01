//? to store the user authorization/role/permission.
//? here separate collection is maintained
// todo if we can do same task from Firebase, we don't need this collection in mongodb

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    access: {
        type: [String],
        required : true,
        default: undefined
    }
}, { timestamps: true })

module.exports = mongoose.model('USER', userSchema);