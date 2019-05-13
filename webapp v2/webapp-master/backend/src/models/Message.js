const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    User: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Message', messageSchema);