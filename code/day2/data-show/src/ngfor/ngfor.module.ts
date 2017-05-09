/**
 * Created by Leslie on 2017/5/4.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgForComponent} from './ngfor.components';

@NgModule({
    declarations: [NgForComponent],
    imports: [BrowserModule],
    bootstrap: [NgForComponent]
})
export class NgForModule{

}