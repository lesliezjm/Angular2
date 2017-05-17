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
 * Created by Leslie on 2017/5/8.
 */
var core_1 = require("@angular/core");
var goods_service_1 = require("./service/goods.service");
var AppComponent = (function () {
    function AppComponent(_goodsService) {
        var _this = this;
        this._goodsService = _goodsService;
        this.title = '商品列表';
        this._goodsService.getGoods()
            .then(function (goods) {
            _this.goodslist = goods;
            console.log(_this.goodslist);
        });
    }
    AppComponent.prototype.onGoodSelected = function (good) {
        this.selectedGood = good;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        providers: [goods_service_1.GoodsService]
    }),
    __metadata("design:paramtypes", [goods_service_1.GoodsService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map