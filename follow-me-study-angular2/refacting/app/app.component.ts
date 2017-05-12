/**
 * Created by Leslie on 2017/5/8.
 */
import {Component} from '@angular/core';
import {Goods} from './entity/goods';
import {GoodsService} from './service/goods.service';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [GoodsService]
})
export class AppComponent {
    public title = '商品列表';

    goodslist: Goods[];

    constructor(private _goodsService: GoodsService) {
        this._goodsService.getGoods()
            .then(goods => {
                this.goodslist = goods;
                console.log(this.goodslist)
            })
    }

    public selectedGood: Goods;

    public onGoodSelected(good) {  //由子组件的onchang事件触发
        this.selectedGood = good;
    }
}