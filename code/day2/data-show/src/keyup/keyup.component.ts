/**
 * Created by Leslie on 2017/5/4.
 */
import {Component,ViewEncapsulation } from '@angular/core';
import {KeyUpComponent_v2} from './keyup2.component';
@Component({
    selector: 'key-up1',
    templateUrl: 'src/keyup/keyup.component.html',
    styleUrls: ['src/keyup/keyup2.component.css','../../node_modules/bootstrap/dist/css/bootstrap.css'],
    encapsulation: ViewEncapsulation.None // 使得css可以在组件中公用
})
export class KeyUpComponent {
    values = '';
    /*onKey(event: any){
     console.log(event);
     this.values += (<HTMLInputElement>event.target).value + '|';
     }*/
    onKey(event: KeyboardEvent) {
        this.values += (<HTMLInputElement>event.target).value + ';';
    }
}

