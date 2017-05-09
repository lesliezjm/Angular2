/**
 * Created by Leslie on 2017/5/9.
 */
import {Component, EventEmitter} from '@angular/core';
import {Goods} from '../entity/goods';

@Component({
    selector: 'my-goods',
    templateUrl: 'app/goods/goods.component.html',
    styleUrls: ['app/goods/goods.component.css'],
    outputs: ['changed'] //调用父组件的onchanged方法
})
export class GoodsComponent {
    title = '商品清单';
    changed = new EventEmitter(); // 创建事件对象

    public goods: Goods[] = [
        {"id": 1, "name": "苹果手机", "price": 7680},
        {"id": 2, "name": "小米手机", "price": 2280},
        {"id": 3, "name": "谷歌手机", "price": 4680},
        {"id": 4, "name": "三星手机", "price": 3680}
    ];
    public selectedGood: Goods;

    onSelect(good: Goods) {
        this.selectedGood = good;
        this.changed.emit(good); // 注意这里触发的是父组件的onchange事件
    }
}
