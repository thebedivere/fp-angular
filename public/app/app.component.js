import { AppService } from './app.service'
import { Component } from '@angular/core'

export const AppComponent =
    Component( {
        selector: 'my-app',
        template: '<h1>{{ x }} {{ y }}</h1>',
        providers: [ AppService ]
    } )
        .Class( {
            constructor( appService ) {
                this.x = appService.thing( 'HI Josh' )
            }
        } )

AppComponent.parameters = [ [ AppService ] ]

export let __hotReload = true