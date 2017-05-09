/**
 * Created by Leslie on 2017/5/8.
 */
import {Component} from '@angular/core';
import {Goods} from '../entity/goods'; // 导入goods类型接口
@Component({
    selector: 'my-goods-detail',
    templateUrl: 'app/goods-detail/goods-detail.component.html',
    inputs: ['goods','myname'] // 接受组件调用时传入的参数
})
export class GoodsDetailComponent {
    private goods: Goods; // 声明属性goods为Goods类型
    private myname: string;
}