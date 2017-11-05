import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AddStoryPage } from '../pages/add-story/add-story';
import { AddTodoPage } from '../pages/add-todo/add-todo';
import { OtherPage } from '../pages/other/other';
import { ToDoPage } from '../pages/to-do/to-do';
import { SubhomePage } from '../pages/subhome/subhome';
import { StoryCapsulePage } from '../pages/story-capsule/story-capsule';
import { DataProvider } from '../providers/data/data';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CalendarModule } from 'ionic3-calendar';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    OtherPage,
    HomePage,
    SubhomePage,
    ToDoPage,
    StoryCapsulePage,
    AddStoryPage,
    AddTodoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    OtherPage,
    HomePage,
    SubhomePage,
    ToDoPage,
    StoryCapsulePage,
    AddStoryPage,
    AddTodoPage
  ],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider]
})
export class AppModule { }
