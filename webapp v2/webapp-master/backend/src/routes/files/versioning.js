const express = require('express')
let router = express.Router()
let Requirement = require('../../models/Requirement')
let Specification = require('../../models/Specification')
const mongoose = require('mongoose')


router.post('/', (req, res, next) => {
    const requirement = new Requirement({
        _id: mongoose.Types.ObjectId(),
        tipo: req.body.tipo,
        Numero: req.body.numero,
        Categoria: req.body.categoria,
        description: req.body.description
    })
    requirement.save()
        .then(result => {
            console.log(result)
            res.status(200).json({
                'message': 'correctly upload a new requirement'
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                'error': err
            })
        })
})

router.post('/especificacion', (req, res, next) => {
    const especificacion = new especificacion({
        _id: mongoose.Types.ObjectId(),
        Especificacion: req.body.Especificacion,
        Prioridad: req.body.Prioridad,
        id: req.body.id,
        description: req.body.description,
        Autor: req.body.Autor,
        Fuente: req.body.Fuente,
        FechaDeCreacion: req.body.FechaDeCreacion,
        FechaUltimaMod: req.body.FechaUltimaMod,
        Actores: req.body.Actores,
        Precondiciones: req.body.Precondiciones,
        Postcondiciones: req.body.Postcondiciones,
        flujo: req.body.flujo,
        flujoalt: req.body.flujoalt,
        Excepciones: req.body.Excepciones
    })
    especificacion.save()
        .then(result => {
            console.log(result)
            res.status(200).json({
                'message': 'correctly upload a new specification'
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                'error': err
            })
        })
})

router.get('/', (req, res, next) => {
    Requirement.find({}, function (err, doc) {
        if (err === null) {
            res.status(200).json(doc)
        } else {
            res.status(500).json(err)
        }
    })
})

router.get('/last', (req, res, next) => {
    Requirement.findOne().sort({
        $natural: -1
    }).exec(function (err, post) {
        if (err === null) {
            res.status(200).json(post)
        } else {
            res.status(500).json(err)
        }
    });

})

router.get('/especificacion', (req, res, next) => {
    Especificacion.find({}, function (err, doc) {
        if (err === null) {
            res.status(200).json(doc)
        } else {
            res.status(500).json(err)
        }
    })
})

router.get('/especificacion/last', (req, res, next) => {
    Especificacion.findOne().sort({
        $natural: -1
    }).exec(function (err, post) {
        if (err === null) {
            res.status(200).json(post)
        } else {
            res.status(500).json(err)
        }
    });
})

router.put('/', (req, res, next) => {
            Requirement.findOneAndUpdate({
                    Numero: req.body.numero
                }, {
                    Categoria: req.body.categoria,
                    description: req.body.description
                }, function(err){
                    if (!err) {
                        res.status(201).json({
                            'message': 'update succesful'
                        })
                    } else {
                        res.status(500).json({
                            'message': 'error' + err
                        })
                    }
                })
            })
router.put('/especificacion', (req, res, next) => {
    Requirement.findOneAndUpdate({
        id: req.body.id
    }, {
        Especificacion: req.body.Especificacion,
        Prioridad: req.body.Prioridad,
        description: req.body.description,
        Autor: req.body.Autor,
        Fuente: req.body.Fuente,
        FechaDeCreacion: req.body.FechaDeCreacion,
        FechaUltimaMod: req.body.FechaUltimaMod,
        Actores: req.body.Actores,
        Precondiciones: req.body.Precondiciones,
        Postcondiciones: req.body.Postcondiciones,
        flujo: req.body.flujo,
        flujoalt: req.body.flujoalt,
        Excepciones: req.body.Excepciones
    }, function(err){
        if (!err) {
            res.status(201).json({
                'message': 'update succesful'
            })
        } else {
            res.status(500).json({
                'message': 'error' + err
            })
        }
    })
        })
module.exports = router