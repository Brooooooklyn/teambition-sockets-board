import 'teambition-sdk'
import 'async-teambition-sdk'
import { bootstrap } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
import { MainComponent } from './app/main/MainComponent'
import { environment } from './app/environment'

if (environment.production) {
  enableProdMode()
}

export default bootstrap(MainComponent)
