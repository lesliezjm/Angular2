/**
 * Created by Leslie on 2017/5/9.
 */
import {GOODS} from './data-goods';
import {Injectable} from '@angular/core';
@Injectable()
export class GoodsService {
    getGoods() {
        return Promise.resolve(GOODS);
    }
}
