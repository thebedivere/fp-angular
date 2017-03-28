import { Component } from '@angular/core'
import { appService } from './app.service'

let AppComponent =
    Component( {
        selector: 'my-app',
        template: '<h1>{{ x }}</h1>',
        providers: [ appService ]
    } )
        .Class( {
            constructor: [ appService, function ( appservice ) {
                AppComponent.prototype.x = appservice.thing( 'hello world' )

            } ]
        } )

export { AppComponent }
