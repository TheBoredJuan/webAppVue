const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('File', fileSchema);