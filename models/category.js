const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;