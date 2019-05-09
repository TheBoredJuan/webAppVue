const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
let Message = require('../../models/Message')

router.post('/', (req, res, next) => {
    nMes = new Message({
        _id: new mongoose.Types.ObjectId(),
        User: req.body.username,
        message: req.body.message,
        time: Date.now()
    })
    Message.create(nMes, function (err, doc){
        if(err){
            res.status(500).json(err)
        }
        else{
            res.status(201).json(doc)
        }
    })
})

router.get('/', (req, res, next) => {
    Message.find({},function(err, doc){
        res.json(doc)
    })
})

module.exports = router;