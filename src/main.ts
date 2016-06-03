import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angualar2TeambitionAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angualar2TeambitionAppComponent);

