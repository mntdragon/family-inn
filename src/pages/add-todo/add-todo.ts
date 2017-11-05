import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the AddTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {

  myParam: string;
  todos: string[] = [];
  todo: string;
  data: string;
  x: string;
  y: string;
  p: any;


  constructor(public navCtrl: NavController, public dataService: DataProvider, public viewCtrl: ViewController, public navParams: NavParams) {
    this.dataService.loadingAll().then(todos => {
            this.todos =  todos;
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTodoPage');
  }

  addTodo(myParam) {
      //this.data = this.todo + "[ with" + myParam + "]";
      //this.todos.push(this.data);
      this.p = {x:this.todo, y:myParam};
      this.todos.push(this.p);
      this.todo = "";
      this.viewCtrl.dismiss();
   }

}
