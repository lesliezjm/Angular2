// app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.components';
import {KeyUpComponent_v2} from './keyup/keyup2.component';

@NgModule({
    // declarations （声明） - 视图类属于这个模块。 Angular 有三种类型的视图类： 组件 、 指令 和 管道 。
    declarations: [AppComponent,KeyUpComponent_v2],
    // 本模块组件模板中需要由其它导出类的模块。
    imports: [BrowserModule],
    // 应用的主视图，称为根组件，它是所有其它应用视图的宿主。只有根模块需要设置 bootstrap 属性中。
    bootstrap: [AppComponent]
})
export class AppModule{
}