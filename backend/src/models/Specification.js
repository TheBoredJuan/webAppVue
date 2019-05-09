const mongoose = require('mongoose')

const specSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Especificacion: {
        type: String,
        required: true
    },
    Prioridad: {
        type: String,
        required: true 
    },
    id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Autor: {
        type: String,
        required: true 
    },
    Fuente: {
        type: String,
        required: true 
    },
    FechaDeCreacion: {
        type: Date,
        required: true
    },
    FechaUltimaMod: {
        type: Date,
        required: true 
    },
    Actores: {
        type: String,
        required: true 
    },
    Precondiciones: {
        type: String,
        required: true 
    },
    Postcondiciones: {
        type: String,
        required: true 
    },
    flujo: {
        type: String,
        required: true 
    },
    flujoalt: {
        type: String,
        required: true 
    },
    Excepciones: {
        type: String,
        required: true 
    }
});

module.exports = mongoose.model('Specification', specSchema);