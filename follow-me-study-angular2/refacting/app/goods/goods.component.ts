/**
 * Created by Leslie on 2017/5/9.
 */
import {Component,Input, EventEmitter, Output} from '@angular/core';
import {Goods} from '../entity/goods';

@Component({
    selector: 'my-goods',
    templateUrl: 'app/goods/goods.component.html',
    styleUrls: ['app/goods/goods.component.css'],
})
export class GoodsComponent {
    title = '商品清单';

    @Input() goods: Goods[];
    @Output() onSelected = new EventEmitter<Goods>();
    public selectedGood: Goods;

    onSelect(good: Goods) {
        this.selectedGood = good;
        this.onSelected.emit(good);  //注意这里触发的是父组件的onSelected事件
    }
    /**
     * // changed = new EventEmitter(); // 创建事件对象
     * // this.changed.emit(good); // 注意这里触发的是父组件的onchange事件
     * // outputs: ['changed'] //调用父组件的onchanged方法
     */
}
