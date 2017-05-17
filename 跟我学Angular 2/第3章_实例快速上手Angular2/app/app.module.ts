/**
 * Created by Leslie on 2017/5/8.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {GoodsComponent} from './goods/goods.component';
import {GoodsDetailComponent} from './goods-detail/goods-detail.component';

@NgModule({
    // 由于 QuickStart 是一个运行在浏览器中的 Web 应用，
    // 所以根模块需要从 @angular/platform-browser 中导入 BrowserModule
    // 并添加到 imports 数组中。
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,GoodsComponent,GoodsDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule{

}