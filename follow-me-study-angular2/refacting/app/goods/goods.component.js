"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Leslie on 2017/5/9.
 */
var core_1 = require("@angular/core");
var GoodsComponent = (function () {
    function GoodsComponent() {
        this.title = '商品清单';
        this.changed = new core_1.EventEmitter(); // 创建事件对象
        this.goods = [
            { "id": 1, "name": "苹果手机", "price": 7680 },
            { "id": 2, "name": "小米手机", "price": 2280 },
            { "id": 3, "name": "谷歌手机", "price": 4680 },
            { "id": 4, "name": "三星手机", "price": 3680 }
        ];
    }
    GoodsComponent.prototype.onSelect = function (good) {
        this.selectedGood = good;
        this.changed.emit(good); // 注意这里触发的是父组件的onchange事件
    };
    return GoodsComponent;
}());
GoodsComponent = __decorate([
    core_1.Component({
        selector: 'my-goods',
        templateUrl: 'app/goods/goods.component.html',
        styleUrls: ['app/goods/goods.component.css'],
        outputs: ['changed'] //调用父组件的onchanged方法
    })
], GoodsComponent);
exports.GoodsComponent = GoodsComponent;
//# sourceMappingURL=goods.component.js.map