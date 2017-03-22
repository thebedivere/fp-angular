'use strict'

const path = require('path'),
    express = require('express'),
    app = express()


app.use(express.static('dist'))

app.listen(4200, function() {
    console.log('App is listening on port 4200')
})