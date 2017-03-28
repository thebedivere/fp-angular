import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import './app.component'


( function ( app ) {
    app.AppModule = NgModule( {
        imports: [ BrowserModule ],
        declarations: [ app.AppComponent ],
        bootstrap: [ app.AppComponent ]
    } )
        .Class( {
            constructor: function () { }
        } )
} )( window.app || ( window.app = {} ) )


