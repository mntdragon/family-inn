import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import { LoadingController, ToastController, ActionSheetController, Platform } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';


/**
 * Generated class for the AddStoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-story',
  templateUrl: 'add-story.html',
})
export class AddStoryPage {

  public data = {
    today: false,
    timetaken: '1990-02-19'
  };

  task: any;
  date = new Date();
  myDate: String = new Date(this.date.getTime() -
  this.date.getTimezoneOffset()*60000).toISOString();

  private disableSelector:boolean=false;
  constructor(public navCtrl: NavController,
              public dataService: DataProvider,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              public alertCtrl: ActionSheetController,
              public platform: Platform) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStoryPage');
  }

  monthChange(val: any) {
    console.log('Month Change:', val);
  }

  yearChange(val: any) {
    console.log('Year Change:', val);
  }
  todayChange(val: any){
    if(this.data.today == true){
      this.disableSelector= true;
    }
    else{
      this.disableSelector= false;
    }
      this.data.today != this.data.today;
  }

  showToast(position: string) {
    const toast = this.toastCtrl.create({
      message: 'Upload successfully',
      position: position,
      duration: 3000
    });

    toast.onDidDismiss(this.dismissHandler);
    toast.present();
  }
  private dismissHandler() {
    console.info('Toast onDidDismiss()');
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="loading-custom-spinner-container">
          <div class="loading-custom-spinner-box"></div>
        </div>
        <div>Uploading...</div>`,
      duration: 2000
    });

    loading.present();
    this.task = setInterval(() => {
      this.showToast('middle');
    }, 2000);
  }

  submit(){
    this.presentLoadingCustom();

  }

  present() {
    let actionSheet = this.alertCtrl.create({
      title: 'Upload photo',
      buttons: [
        {
          text: 'Choose from library',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'photos' : null,
          handler: () => {
            console.log('Choose from library clicked');
          }
        },
        {
          text: 'Take photo',
          icon: !this.platform.is('ios') ? 'reverse-camera' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
