import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ToDoPage } from '../to-do/to-do';
import { StoryCapsulePage } from '../story-capsule/story-capsule';

@Component({
 templateUrl: 'tabs.html'
})
export class TabsPage {
 // this tells the tabs component which Pages
 // should be each tab's root Page
 tab1Root: any = HomePage;
 tab2Root: any = ToDoPage;
 tab3Root: any = StoryCapsulePage;

 constructor() {

 }
}
