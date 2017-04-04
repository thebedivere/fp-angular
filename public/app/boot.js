// polyfills
import 'es6-shim'
import 'es6-promise'
import 'reflect-metadata'
import 'zone.js'

import { AppModule } from './app.module'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

export const boot = platformBrowserDynamic().bootstrapModule( AppModule )

export let __hotReload = true