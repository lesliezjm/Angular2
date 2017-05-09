/**
 * Created by Leslie on 2017/4/26.
 */
// import {NgModule}      from '@angular/core';
// import {BrowserModule} from '@angular/platform-browser';
//
// @NgModule({
//     imports: [BrowserModule]
// })
// export class AppModule {
// }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }