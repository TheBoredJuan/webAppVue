const express = require('express')
const multer = require('multer')
let router = express.Router()
let File = require('../../models/File')
const fs = require("fs");
const mongoose = require('mongoose')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: storage
})

router.post('/', upload.single('File'), (req, res, next) => {
    const file = new File({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        filePath: req.body.filePath
    })
    file.save()
        .then((result) => {
            console.log(result)
            res.status(201).json({
                'message': 'saved file correctly'
            })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                'message': err
            })
        })
})

router.get('/', (req, res, next) =>{
    File.find({name : req.body.id})
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})


module.exports = router