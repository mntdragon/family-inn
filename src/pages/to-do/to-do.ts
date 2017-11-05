import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddTodoPage } from '../add-todo/add-todo';
import { DataProvider } from '../../providers/data/data';
import { ModalController } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-to-do',
  templateUrl: 'to-do.html',
})
export class ToDoPage {

  todos: string[] = [];
  todo: string;
  date: string = "today";

  constructor(public navCtrl: NavController, public dataService: DataProvider, public navParams: NavParams, public modalCtrl: ModalController) {
    this.dataService.loadingAll().then(todos => {
            this.todos =  todos;
        });
    //this.myParam = navParams.get('myParam');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToDoPage');

  }

  add() {
    let myModal = this.modalCtrl.create(AddTodoPage);
    myModal.present();
      //this.navCtrl.push(AddTodoPage);
      //  this.todos.push(this.todo);
      //  this.todo = "";
   }

  delete(item) {
        var index = this.todos.indexOf(item, 0);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}
