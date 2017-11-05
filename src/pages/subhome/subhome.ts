import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
selector: 'page-subhome',
templateUrl: 'subhome.html',
})

export class SubhomePage {
    activities: any=0;

    constructor(public navCtrl: NavController,
                public dataService: DataProvider,
                public navParams: NavParams) {

      this.dataService.getByID(this.navParams.get('id')).then(result => {
      this.activities = result;
    });
  }
}
