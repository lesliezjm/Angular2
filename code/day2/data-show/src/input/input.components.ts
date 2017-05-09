/**
 * Created by Leslie on 2017/5/4.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'click-me',
    templateUrl: 'src/input/input.component.html',
})
export class ClickMeComponent{
    clickMessage='';
    onClickMe(){
        this.clickMessage = '北风网'
    }
}