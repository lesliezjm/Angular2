/**
 * Created by Leslie on 2017/5/5.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'key-up2',
    templateUrl: 'src/keyup/keyup2.component.html',
})
export class KeyUpComponent_v2 {
    values = '';
    onKey(value: string) {
        this.values += value + "||"
    }
}
