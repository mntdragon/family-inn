import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddStoryPage } from '../../pages/add-story/add-story';
import { ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

/**
 * Generated class for the StoryCapsulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-story-capsule',
  templateUrl: 'story-capsule.html',
})
export class StoryCapsulePage {

  images = ['1.jpg', '2.jpg','7.jpg', '3.jpg', '4.jpg'];

  constructor(public navCtrl: NavController, public dataService: DataProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryCapsulePage');
  }

  Add_story(){
    this.navCtrl.push(AddStoryPage);
  }

}
