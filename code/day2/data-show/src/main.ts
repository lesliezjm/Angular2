import 'core-js';
import 'zone.js';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
import {KeyUpModule} from './keyup/keyup.module';

platformBrowserDynamic().bootstrapModule(KeyUpModule)
.catch(err => console.error(err));