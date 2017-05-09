/**
 * Created by Leslie on 2017/5/4.
 */
import {Component} from '@angular/core';
@Component({
    selector: 'my-ngfor',
    templateUrl: 'src/ngfor/ngfor.components.html'
})
export class NgForComponent{
    title = '站点列表';
    sites = ['北风网', 'Google', 'Taobao', 'Facebook'];
    mySite = this.sites[0];

    onSave(){
        alert('Saved')
    }
}
