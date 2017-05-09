import {Component} from '@angular/core';//所有组件、指令、服务等定义类时需要的装饰器，都可以通过 @angular/core 找到
// 元数据（Metadata）
@Component({
    // 一个 css 选择器，它告诉 Angular 在 父级 HTML 中寻找一个 <mylist> 标签，然后创建该组件，并插入此标签中。
    selector: 'my-app',

    // 组件 HTML,这里使用的是反引号，多行控制
    template:`
        <h1>{{title}}</h1>
        <h2>我喜欢的网站：{{mySite}}</h2>
    `,
    // 组件 HTML 模板的地址。
    // templateUrl: 'src/app.component.html'

    // 一个数组，包含 此 模板需要依赖的组件或指令。
    // directives: [ComponentDetails]

    // 一个数组，包含组件所依赖的服务所需要的依赖注入提供者。
    // providers: [http]
})
export class AppComponent{
    // Angular会自动从组件中提取title和mySite属性的值，并显示在浏览器中
    title = '站点列表';
    mySite = '北风网';
}