/**
 * Created by Leslie on 2017/5/4.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ClickMeComponent } from './input.components';

@NgModule({
    declarations: [ClickMeComponent],
    imports: [BrowserModule],
    bootstrap: [ClickMeComponent]
})
export class ClickMeModule{

}