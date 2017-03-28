'use strict'

const express = require( 'express' ),
    app = express()


app.use( express.static( 'public' ) )

app.listen( 4200, function () {
    console.log( 'App is listening on port 4200' )
} )