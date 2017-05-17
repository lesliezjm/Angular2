"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Leslie on 2017/5/9.
 */
var core_1 = require("@angular/core");
var GoodsComponent = (function () {
    function GoodsComponent() {
        this.title = '商品清单';
        this.onSelected = new core_1.EventEmitter();
        /**
         * // changed = new EventEmitter(); // 创建事件对象
         * // this.changed.emit(good); // 注意这里触发的是父组件的onchange事件
         * // outputs: ['changed'] //调用父组件的onchanged方法
         */
    }
    GoodsComponent.prototype.onSelect = function (good) {
        this.selectedGood = good;
        this.onSelected.emit(good); //注意这里触发的是父组件的onSelected事件
    };
    return GoodsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], GoodsComponent.prototype, "goods", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GoodsComponent.prototype, "onSelected", void 0);
GoodsComponent = __decorate([
    core_1.Component({
        selector: 'my-goods',
        templateUrl: 'app/goods/goods.component.html',
        styleUrls: ['app/goods/goods.component.css'],
    })
], GoodsComponent);
exports.GoodsComponent = GoodsComponent;
//# sourceMappingURL=goods.component.js.map