/**
 * Created by Leslie on 2017/5/8.
 */
import {Component,Input} from '@angular/core';
import {Goods} from '../entity/goods'; // 导入goods类型接口
@Component({
    selector: 'my-goods-detail',
    templateUrl: 'app/goods-detail/goods-detail.component.html',
})
export class GoodsDetailComponent {
    @Input() goods: Goods; //标准这一个用于接收父组件的输入属性
    @Input() myname: string;

    /**
     * // inputs: ['goods','myname'] // 接受组件调用时传入的参数
     * // private goods: Goods; // 声明属性goods为Goods类型
     * // private myname: string;
     */
}