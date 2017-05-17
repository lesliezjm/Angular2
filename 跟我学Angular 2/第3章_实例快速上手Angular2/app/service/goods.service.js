"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Leslie on 2017/5/9.
 */
var data_goods_1 = require("./data-goods");
// @Injectable()
var GoodsService = (function () {
    function GoodsService() {
    }
    GoodsService.prototype.getGoods = function () {
        return Promise.resolve(data_goods_1.GOODS);
    };
    return GoodsService;
}());
exports.GoodsService = GoodsService;
//# sourceMappingURL=goods.service.js.map