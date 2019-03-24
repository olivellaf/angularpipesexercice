import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports for get the locale variables for the languages.
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

// Importing our custom Pipe
import { CapitalizedPipe } from './pipes/capitalized.pipe';

// register the locale variable imported
registerLocaleData(localeEs, 'es');

import { AppComponent } from './app.component';
import { SecuredomPipe } from './pipes/securedom.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    SecuredomPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // set the locale id as a provider
    { provide: LOCALE_ID, useValue: "es" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
