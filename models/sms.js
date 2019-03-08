const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const smsSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        ref: 'Category',
        required: true
    },
    star: {
        type: Integer,
        required: true,
        default: 0
    }
});

const Sms = mongoose.model('Sms', smsSchema);

module.exports = Sms;