// app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.components';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule{
}