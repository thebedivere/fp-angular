import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

let AppModule = NgModule( {
        imports: [ BrowserModule ],
        declarations: [ AppComponent ],
        bootstrap: [ AppComponent ]
    } )
        .Class( {
            constructor: function () { }
        } )

export { AppModule }

export let __hotReload = true
