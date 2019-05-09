const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const errorHandler = require('errorhandler')
const app = express()

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
    secret: 'passport-tutorial',
    cookie: {
        maxAge: 60000
    },
    resave: false,
    saveUninitialized: false
}))
require('./src/models/Users')
require('./config/passport');
mongoose.connect('mongodb+srv://leezym:' + process.env.MONGO_ATLAS_PW + '@cluster0-cxt63.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})

app.use('/uploads', express.static('uploads'))
app.use('/',require('./src/routes'));
app.use('/mess',require('./src/routes/messaging/index'))
app.use('/file',require('./src/routes/files/fileManaging'))
app.use('/versioning', require('./src/routes/files/versioning'))
app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
        errors: {
            message: err.message,
            error: err,
        }
    })
})

app.use((err, req, res) => {
    res.status(err.status || 500)
    res.json({
        errors: {
            message: err.message,
            error: {},
        }
    })
})
app.listen(8000, () => console.log('Server running on http://localhost:8000/'));