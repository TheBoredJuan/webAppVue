const mongoose = require('mongoose')

const requirementSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tipo: {
        type: String,
        required: true
    },
    Numero: {
        type: Number,
        required: true 
    },
    Categoria: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Requirement', requirementSchema);