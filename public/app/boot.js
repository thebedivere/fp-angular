// polyfills
import 'es6-shim'
import 'es6-promise'
import 'reflect-metadata'
import 'zone.js'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import './app.module'

( function ( app ) {
  platformBrowserDynamic().bootstrapModule( app.AppModule )
} )( window.app || ( window.app = {} ) )

