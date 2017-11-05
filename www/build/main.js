webpackJsonp([8],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddStoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddStoryPage = (function () {
    function AddStoryPage(navCtrl, dataService, navParams, loadingCtrl, toastCtrl, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.data = {
            today: false,
            timetaken: '1990-02-19'
        };
        this.date = new Date();
        this.myDate = new Date(this.date.getTime() -
            this.date.getTimezoneOffset() * 60000).toISOString();
        this.disableSelector = false;
    }
    AddStoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddStoryPage');
    };
    AddStoryPage.prototype.monthChange = function (val) {
        console.log('Month Change:', val);
    };
    AddStoryPage.prototype.yearChange = function (val) {
        console.log('Year Change:', val);
    };
    AddStoryPage.prototype.todayChange = function (val) {
        if (this.data.today == true) {
            this.disableSelector = true;
        }
        else {
            this.disableSelector = false;
        }
        this.data.today != this.data.today;
    };
    AddStoryPage.prototype.showToast = function (position) {
        var toast = this.toastCtrl.create({
            message: 'Upload successfully',
            position: position,
            duration: 3000
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    AddStoryPage.prototype.dismissHandler = function () {
        console.info('Toast onDidDismiss()');
    };
    AddStoryPage.prototype.presentLoadingCustom = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <div class=\"loading-custom-spinner-container\">\n          <div class=\"loading-custom-spinner-box\"></div>\n        </div>\n        <div>Uploading...</div>",
            duration: 2000
        });
        loading.present();
        this.task = setInterval(function () {
            _this.showToast('middle');
        }, 2000);
    };
    AddStoryPage.prototype.submit = function () {
        this.presentLoadingCustom();
    };
    AddStoryPage.prototype.present = function () {
        var actionSheet = this.alertCtrl.create({
            title: 'Upload photo',
            buttons: [
                {
                    text: 'Choose from library',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'photos' : null,
                    handler: function () {
                        console.log('Choose from library clicked');
                    }
                },
                {
                    text: 'Take photo',
                    icon: !this.platform.is('ios') ? 'reverse-camera' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return AddStoryPage;
}());
AddStoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-story',template:/*ion-inline-start:"D:\Projects\FamilyInn\src\pages\add-story\add-story.html"*/'<!--\n  Generated template for the AddStoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>ADD YOUR STORY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-item>\n    <ion-img width="100%" height="200px" src="..."></ion-img>\n        <ion-fab center middle #fab5>\n            <button ion-fab color="dark" (click)="present()"><ion-icon ios="ios-camera" md="md-camera"></ion-icon></button>\n        </ion-fab>\n</ion-item>\n\n  <ion-list>\n    <!-- <ion-list-header>Popover Interface Select</ion-list-header> -->\n    <ion-item no-lines>\n      <!-- <ion-input type="text" rows="6" placeholder="Write your story..."></ion-input> -->\n      <ion-textarea rows="3" placeholder="Write your story..."></ion-textarea>\n    </ion-item>\n    <ion-item> \n      <ion-label>Time taken</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="data.timetaken" [disabled]="disableSelector"></ion-datetime>\n      <!-- <ion-select (ionChange)="monthChange($event)" interface="popover" [disabled]="disableSelector">\n        <ion-option value="01">January</ion-option>\n        <ion-option value="02">February</ion-option>\n        <ion-option value="03" selected="true">March</ion-option>\n        <ion-option value="04">April</ion-option>\n        <ion-option value="05">May</ion-option>\n        <ion-option value="06">June</ion-option>\n        <ion-option value="07">July</ion-option>\n        <ion-option value="08">August</ion-option>\n        <ion-option value="09">September</ion-option>\n        <ion-option value="10">October</ion-option>\n        <ion-option value="11">November</ion-option>\n        <ion-option value="12">December</ion-option>\n      </ion-select>\n      <ion-select (ionChange)="yearChange($event)" interface="popover" [disabled]="disableSelector">\n        <ion-option>1988</ion-option>\n        <ion-option>1989</ion-option>\n        <ion-option>1990</ion-option>\n        <ion-option>1991</ion-option>\n        <ion-option>1992</ion-option>\n        <ion-option>1993</ion-option>\n        <ion-option selected="true">1994</ion-option>\n        <ion-option>1995</ion-option>\n        <ion-option>1996</ion-option>\n        <ion-option>1997</ion-option>\n        <ion-option>1998</ion-option>\n        <ion-option>1999</ion-option>\n        <ion-option>2000</ion-option>\n        <ion-option>2001</ion-option>\n        <ion-option>2002</ion-option>\n        <ion-option>2003</ion-option>\n        <ion-option>2004</ion-option>\n        <ion-option>2005</ion-option>\n        <ion-option>2006</ion-option>\n        <ion-option>2007</ion-option>\n        <ion-option>2008</ion-option>\n        <ion-option>2009</ion-option>\n        <ion-option>2010</ion-option>\n        <ion-option>2011</ion-option>\n        <ion-option>2012</ion-option>\n        <ion-option>2013</ion-option>\n        <ion-option>2014</ion-option>\n        <ion-option>2015</ion-option>\n        <ion-option>2016</ion-option>\n        <ion-option>2017</ion-option>\n      </ion-select> -->\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label class="today">Today</ion-label><ion-datetime displayFormat="DD MMMM YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="myDate"></ion-datetime>\n      <ion-toggle [(ngModel)]="data.today" color="secondary" (ionChange)="todayChange($event)"></ion-toggle>\n    </ion-item>\n    \n  </ion-list>\n  <div padding>\n      <button ion-button block color="danger" (click)="submit()">Upload</button>\n    </div>\n\n    \n</ion-content>\n'/*ion-inline-end:"D:\Projects\FamilyInn\src\pages\add-story\add-story.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
], AddStoryPage);

//# sourceMappingURL=add-story.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddTodoPage = (function () {
    function AddTodoPage(navCtrl, dataService, viewCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.todos = [];
        this.dataService.loadingAll().then(function (todos) {
            _this.todos = todos;
        });
    }
    AddTodoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddTodoPage');
    };
    AddTodoPage.prototype.addTodo = function (myParam) {
        //this.data = this.todo + "[ with" + myParam + "]";
        //this.todos.push(this.data);
        this.p = { x: this.todo, y: myParam };
        this.todos.push(this.p);
        this.todo = "";
        this.viewCtrl.dismiss();
    };
    return AddTodoPage;
}());
AddTodoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-todo',template:/*ion-inline-start:"D:\Projects\FamilyInn\src\pages\add-todo\add-todo.html"*/'<!--\n  Generated template for the AddTodoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="main-view">\n  <div class="modal_content">\n  <ion-item>\n         <ion-input [(ngModel)]="todo" placeholder="Insert some todo here here" type="text"></ion-input>\n     </ion-item>\n     <ion-list no-margin>\n       <ion-item>\n         <ion-label>Tag people</ion-label>\n         <ion-select [(ngModel)]="myParam" multiple="true">\n           <ion-option value="Zed">Zed (son)</ion-option>\n           <ion-option value="Hani">Hani (daughter)</ion-option>\n           <ion-option value="Abel">Abel (Grandpa)</ion-option>\n           <ion-option value="Amie">Amie (Grandma)</ion-option>\n           <ion-option value="Mia">Mia (mom)</ion-option>\n           <ion-option value="Ian">Ian (dad)</ion-option>\n         </ion-select>\n       </ion-item>\n     </ion-list>\n     <button ion-button full (click)="addTodo(myParam)">ADD</button>\n   </div>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\FamilyInn\src\pages\add-todo\add-todo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
], AddTodoPage);

//# sourceMappingURL=add-todo.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtherPage = (function () {
    function OtherPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OtherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtherPage');
    };
    return OtherPage;
}());
OtherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-other',template:/*ion-inline-start:"D:\Projects\FamilyInn\src\pages\other\other.html"*/'<!--\n\n  Generated template for the OtherPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>other hehefef</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\FamilyInn\src\pages\other\other.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
], OtherPage);

//# sourceMappingURL=other.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubhomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubhomePage = (function () {
    function SubhomePage(navCtrl, dataService, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.navParams = navParams;
        this.activities = 0;
        this.dataService.getByID(this.navParams.get('id')).then(function (result) {
            _this.activities = result;
        });
    }
    return SubhomePage;
}());
SubhomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subhome',template:/*ion-inline-start:"D:\Projects\FamilyInn\src\pages\subhome\subhome.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Application name here</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- <ion-content>\n\n<button ion-button block outline>Water Balloon Relay</button>\n\n<button ion-button block outline>Water Balloon Relay</button>\n\n<button ion-button block outline>Pantyhose Bowling</button>\n\n<button ion-button block outline>Tipsy Waiter</button>\n\n<button ion-button block outline>Jumbo Beer Pong</button>\n\n\n\n\n\n</ion-content> -->\n\n\n\n<ion-content padding *ngIf="activities != 0">\n\n  <ion-img src={{activities.content.img}}></ion-img>\n\n<h2>{{activities.content.title}}</h2>\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n    <ion-icon class="star" name="star"></ion-icon> GAME: LOREM IPSUM\n\n  </ion-card-header>\n\n<p>{{activities.content.des}}</p>\n\n<p>{{activities.content.instructions}}</p>\n\n</ion-card>\n\n\n\n<ion-fab right bottom>\n\n    <button ion-fab color="dark"><ion-icon name="arrow-dropleft"></ion-icon></button>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\FamilyInn\src\pages\subhome\subhome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
], SubhomePage);

//# sourceMappingURL=subhome.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryCapsulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_add_story_add_story__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the StoryCapsulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StoryCapsulePage = (function () {
    function StoryCapsulePage(navCtrl, dataService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.modalCtrl = modalCtrl;
        this.images = ['1.jpg', '2.jpg', '7.jpg', '3.jpg', '4.jpg'];
    }
    StoryCapsulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoryCapsulePage');
    };
    StoryCapsulePage.prototype.Add_story = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_add_story_add_story__["a" /* AddStoryPage */]);
    };
    return StoryCapsulePage;
}());
StoryCapsulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-story-capsule',template:/*ion-inline-start:"D:\Projects\FamilyInn\src\pages\story-capsule\story-capsule.html"*/'<!--\n\n  Generated template for the StoryCapsulePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar color="secondary">\n\n      <ion-title>STORY CAPSULE</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content class="cards-bg social-cards">\n\n\n\n    <ion-item>\n\n      <h4>Recently uploaded</h4>\n\n    <ion-slides class="image-slider" loop="true" slidesPerView="2">\n\n      <ion-slide *ngFor="let img of images">\n\n        <img src="img/{{img}}" class="thumb-img" imageViewer/>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </ion-item>\n\n  \n\n  <ion-card>\n\n  \n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="img/3.jpg">\n\n      </ion-avatar>\n\n      <h2 style="color: green">Bampás</h2>\n\n      <p>Taken time: June 28, 1990</p>\n\n    </ion-item>\n\n  \n\n    <img src="img/6.jpg">\n\n  \n\n    <ion-card-content>\n\n      <p>Daddy story: Hey kids, look at your awesome teen dad !!!!</p>\n\n    </ion-card-content>\n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button color="primary" clear small icon-start>\n\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n\n          4 Likes\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button color="primary" clear small icon-start>\n\n          <ion-icon name=\'text\'></ion-icon>\n\n          10 Comments\n\n        </button>\n\n      </ion-col>\n\n      <ion-col align-self-center text-center>\n\n        <ion-note>\n\n          2d ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-card>\n\n  \n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="img/3.jpg">\n\n      </ion-avatar>\n\n      <h2 style="color: rgb(238, 14, 133)">Grandmom</h2>\n\n      <p>Time taken: November 5, 1955</p>\n\n    </ion-item>\n\n  \n\n    <img src="img/7.jpg">\n\n  \n\n    <ion-card-content>\n\n      <p>Grandmom story here: orem ipsum dolor sit amet.</p>\n\n    </ion-card-content>\n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button color="primary" clear small icon-start>\n\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n\n          5 Likes\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button color="primary" clear small icon-start>\n\n          <ion-icon name=\'text\'></ion-icon>\n\n          10 Comments\n\n        </button>\n\n      </ion-col>\n\n      <ion-col align-self-center text-center>\n\n        <ion-note>\n\n          11h ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-card>\n\n  \n\n  \n\n  <ion-card>\n\n  \n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="img/4.jpg">\n\n      </ion-avatar>\n\n      <h2 style="color: rgba(255, 63, 5, 0.856)">Grandpa</h2>\n\n      <p>Time taken: October 10, 2015</p>\n\n    </ion-item>\n\n  \n\n    <img src="img/9.jpg">\n\n  \n\n    <ion-card-content>\n\n      <p>Grandpa story: orem ipsum dolor sit amet, adhuc recteque gubergren at.</p>\n\n    </ion-card-content>\n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button color="primary" clear small icon-start>\n\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n\n          30 Likes\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button color="primary" clear small icon-start>\n\n          <ion-icon name=\'text\'></ion-icon>\n\n          64 Comments\n\n        </button>\n\n      </ion-col>\n\n      <ion-col align-self-center text-center>\n\n        <ion-note>\n\n          3w ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-card>\n\n  \n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger" mini (click)="Add_story()"><ion-icon name="add"></ion-icon></button>\n\n      </ion-fab>\n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\Projects\FamilyInn\src\pages\story-capsule\story-capsule.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */]])
], StoryCapsulePage);

//# sourceMappingURL=story-capsule.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_todo_add_todo__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToDoPage = (function () {
    function ToDoPage(navCtrl, dataService, navParams, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.todos = [];
        this.date = "today";
        this.dataService.loadingAll().then(function (todos) {
            _this.todos = todos;
        });
        //this.myParam = navParams.get('myParam');
    }
    ToDoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ToDoPage');
    };
    ToDoPage.prototype.add = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_todo_add_todo__["a" /* AddTodoPage */]);
        myModal.present();
        //this.navCtrl.push(AddTodoPage);
        //  this.todos.push(this.todo);
        //  this.todo = "";
    };
    ToDoPage.prototype.delete = function (item) {
        var index = this.todos.indexOf(item, 0);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    };
    return ToDoPage;
}());
ToDoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-to-do',template:/*ion-inline-start:"D:\Projects\FamilyInn\src\pages\to-do\to-do.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>\n\n      FAM365\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <!-- <ion-item>\n\n         <ion-input [(ngModel)]="todo" placeholder="Insert some todo here here" type="text"></ion-input>\n\n     </ion-item> -->\n\n  <div padding>\n\n    <ion-segment [(ngModel)]="date">\n\n      <ion-segment-button value="today">\n\n          Today\n\n      </ion-segment-button>\n\n    <ion-segment-button value="coming">\n\n            Coming\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n<div [ngSwitch]="date">\n\n  <ion-list *ngSwitchCase="\'today\'" no-lines>\n\n    <ion-list-header>\n\n      Do anytime today\n\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor="let t of todos">\n\n        <ion-item>\n\n            <ion-label>{{t.x}}</ion-label>\n\n             <ion-label><ion-icon ios="logo-octocat" md="logo-octocat" class="cat"></ion-icon> {{t.y}}</ion-label>\n\n            <ion-checkbox color="secondary" checked="false"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item-options side="right">\n\n            <button ion-button color="danger" (click)="delete(t)">\n\n                <ion-icon name="trash"></ion-icon> Delete\n\n            </button>\n\n        </ion-item-options>\n\n    </ion-item-sliding>\n\n    <ion-fab bottom center>\n\n      <button ion-fab color="danger" (click)="add()"><ion-icon name="add"></ion-icon></button>\n\n        </ion-fab>\n\n  </ion-list>\n\n\n\n\n\n  <ion-list *ngSwitchCase="\'coming\'" no-lines>\n\n    <ion-calendar #calendar></ion-calendar>\n\n    <ion-item>\n\n      <ion-label>18 Oct 2017</ion-label>\n\n      <ion-label> <ion-icon ios="logo-reddit" md="logo-reddit"></ion-icon> Abel birthday </ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>19 Oct 2017</ion-label>\n\n      <ion-label> <ion-icon ios="ios-heart" md="md-heart"></ion-icon> Wedding aniversary </ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>22 Nov 2017</ion-label>\n\n      <ion-label class="labelclass"> <ion-icon ios="ios-plane" md="md-plane"></ion-icon> Fly to Helsinki for meeting </ion-label>\n\n    </ion-item>\n\n    <ion-fab bottom center>\n\n      <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n\n        </ion-fab>\n\n  </ion-list>\n\n\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\FamilyInn\src\pages\to-do\to-do.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */]])
], ToDoPage);

//# sourceMappingURL=to-do.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		418,
		1
	],
	"../pages/add-story/add-story.module": [
		419,
		7
	],
	"../pages/add-todo/add-todo.module": [
		420,
		6
	],
	"../pages/contact/contact.module": [
		421,
		0
	],
	"../pages/other/other.module": [
		422,
		5
	],
	"../pages/story-capsule/story-capsule.module": [
		424,
		4
	],
	"../pages/subhome/subhome.module": [
		423,
		3
	],
	"../pages/to-do/to-do.module": [
		425,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__to_do_to_do__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__story_capsule_story_capsule__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__to_do_to_do__["a" /* ToDoPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__story_capsule_story_capsule__["a" /* StoryCapsulePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Projects\FamilyInn\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="ToDo" tabIcon="ios-list-box-outline"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Story Capsule" tabIcon="ios-book-outline"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\Projects\FamilyInn\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_subhome_subhome__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    //navCtrl: NavController;
    //modalCtrl: ModalController;
    function HomePage(navCtrl, dataService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.modalCtrl = modalCtrl;
        this.searchTerm = '';
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.dataService.loadAll().then(function (result) {
            _this.activities = result;
        });
    }
    HomePage.prototype.openModal = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_subhome_subhome__["a" /* SubhomePage */], { id: id });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
    };
    HomePage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    HomePage.prototype.setFilteredItems = function () {
        this.activities = this.dataService.filterItems(this.searchTerm);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Projects\FamilyInn\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>FAM365</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-searchbar\n\n  [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="onSearchInput()">\n\n</ion-searchbar>\n\n\n\n  <div *ngIf="searching" class="spinner-container">\n\n    <ion-spinner></ion-spinner>\n\n</div>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col width-33>\n\n        <ion-card *ngFor="let activity of activities">\n\n          <ion-item>\n\n           <img src={{activity.image}}/>\n\n            <h2>{{activity.activity}}</h2>\n\n            <ion-badge color="twitter">{{activity.content.age}}</ion-badge>\n\n          </ion-item>\n\n          <ion-card-content>\n\n            {{activity.text}}\n\n          </ion-card-content>\n\n          <button ion-button clear item-end icon-right end (click)="openModal(activity.id)">\n\n            More\n\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n          </button>\n\n        </ion-card>\n\n      </ion-col>\n\n<!-- <ion-col width-33>\n\n        <ion-card>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img src="img/cardimg1.jpg">\n\n            </ion-avatar>\n\n            <h2>Protype</h2>\n\n            <p>October 4, 2017</p>\n\n          </ion-item>\n\n          <ion-card-content>\n\n            This will become a nice prototype !! It\'s going to help a lot of parents !!\n\n          </ion-card-content>\n\n          <button ion-button clear item-end icon-right end>\n\n            More\n\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n          </button>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col width-33>\n\n        <ion-card>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img src="img/cardimg1.jpg">\n\n            </ion-avatar>\n\n            <h2>Protype</h2>\n\n            <p>October 4, 2017</p>\n\n          </ion-item>\n\n          <ion-card-content>\n\n            This will become a nice prototype !! It\'s going to help a lot of parents !!\n\n          </ion-card-content>\n\n          <button ion-button clear item-end icon-right end>\n\n            More\n\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n          </button>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col width-33>\n\n        <ion-card>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img src="img/cardimg1.jpg">\n\n            </ion-avatar>\n\n            <h2>Protype</h2>\n\n            <p>October 4, 2017</p>\n\n          </ion-item>\n\n          <ion-card-content>\n\n            This will become a nice prototype !! It\'s going to help a lot of parents !!\n\n          </ion-card-content>\n\n          <button ion-button clear item-end icon-right end>\n\n            More\n\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n          </button>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col width-33>\n\n        <ion-card>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img src="img/cardimg1.jpg">\n\n            </ion-avatar>\n\n            <h2>Protype</h2>\n\n            <p>October 4, 2017</p>\n\n          </ion-item>\n\n          <ion-card-content>\n\n            This will become a nice prototype !! It\'s going to help a lot of parents !!\n\n          </ion-card-content>\n\n          <button ion-button clear item-end icon-right end>\n\n            More\n\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n          </button>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col width-33>\n\n        <ion-card>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img src="img/cardimg1.jpg">\n\n            </ion-avatar>\n\n            <h2>Protype</h2>\n\n            <p>October 4, 2017</p>\n\n          </ion-item>\n\n          <ion-card-content>\n\n            This will become a nice prototype !! It\'s going to help a lot of parents !!\n\n          </ion-card-content>\n\n          <button ion-button clear item-end icon-right end>\n\n            More\n\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n          </button>\n\n        </ion-card>\n\n      </ion-col>-->\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Projects\FamilyInn\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataProvider = (function () {
    function DataProvider(http) {
        this.http = http;
        console.log('Hello DataProvider Provider');
        this.todos = [];
        this.withperson = [];
        this.activities = [
            {
                id: 1,
                activity: 'Organizing a day camp with Family Summer Olympics games',
                image: "img/olympic.jpg",
                text: "Such a great excuse to spend some fun quality time with loved ones. Family members competitive spirit is put to it’s test with a variety of backyard games and competitions, including water balloon relays, jumbo beer pong, slosh ball and so much more!",
                content: {
                    title: "Family Summer Olympics games",
                    img: "img/olym1.JPG",
                    age: "age range",
                    des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
                    tools: ""
                },
                keywords: "summer, backyard, outdoor, game, games, camp, camping, organize, olympics, olympic"
            },
            {
                id: 2,
                activity: 'DIY LADDER GOLF: THE PERFECT OUTDOOR PARTY GAME',
                image: "img/lele.jpg",
                text: "Ladder Golf is a great outdoor game. Play it with your family or with a crowd. This game is perfect for parties. Just promise me no crying hysterically if you lose.",
                content: {
                    title: "Ladder golf",
                    img: "img/golflad1.JPEG",
                    age: "age range",
                    des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
                    tools: ""
                },
                keywords: "summer, spring, autumn, fall, game, games, party, parties, diy, ladder, golf, outdoor"
            },
            {
                id: 3,
                activity: 'Idea Snow-Themed Crafts',
                image: "img/snowcraft.jpg",
                text: "Do you have the winter blues? Bust your cabin-fever by having a little fun with snow. Create some wintry crafts and make some goodies that incorporate that fluffy white stuff we all love this time of year.",
                content: {
                    title: "Snow craft",
                    img: "img/no_image.JPEG",
                    age: "age range",
                    des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
                    tools: ""
                },
                keywords: "winter, craft, crafts, snow, theme, outdoor, decoration, decor"
            },
            {
                id: 4,
                activity: '17 Functional DIY Camping Hacks to Make Your Outdoor Experience Less Expensive Today',
                image: "img/camp.jpg",
                text: "Find out the collection of simple DIY camping hacks extremely useful in making your outdoors experience less expensive and more enjoyable. Try them and watch your fellow campers turn green with envy.",
                content: {
                    title: "DIY Camping Hacks",
                    img: "img/no_image.JPG",
                    age: "age range",
                    des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
                    tools: ""
                },
                keywords: "camping, camp, summer, spring, autumn, fall, diy, hacks, hack, outdoor, tip, tips"
            },
            {
                id: 5,
                activity: 'Recycled Bottle Bowling',
                image: "img/bowling.jpg",
                text: "A hit of the neighborhood, turn the backyard into your very own bowling alley with our recycled bottle bowling craft! With a little paint and some rescued bottles, you’ll soon have an easy DIY game everyone in the family will love.",
                content: {
                    title: "Bowling time",
                    img: "img/no_image.JPG",
                    age: "age range",
                    des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
                    tools: ""
                },
                keywords: "summer, spring, autumn, fall, craft, crafts, outdoor, bowling, bottle"
            },
            {
                id: 6,
                activity: 'De Finibus Bonorum et Malorum',
                image: "img/powerranger.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                content: {
                    title: "Lorem Ipsum",
                    img: "img/no_image.JPG",
                    age: "age range",
                    des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
                    tools: ""
                },
                keywords: "Lorem ipsum dolor"
            }
        ];
    }
    //loadAll() method which simply returns this activities array variable as promise.
    DataProvider.prototype.loadAll = function () {
        return Promise.resolve(this.activities);
    };
    ;
    DataProvider.prototype.loadingAll = function () {
        return Promise.resolve(this.todos);
    };
    ;
    DataProvider.prototype.loadwithperson = function () {
        return Promise.resolve(this.withperson);
    };
    ;
    //return the matching id’s object as promise.
    DataProvider.prototype.getByID = function (id) {
        for (var i = 0; i < (this.activities).length; i++) {
            if (this.activities[i].id == id) {
                return Promise.resolve(this.activities[i]);
            }
        }
    };
    ;
    DataProvider.prototype.filterItems = function (searchTerm) {
        return this.activities.filter(function (activity) {
            return activity.keywords.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    return DataProvider;
}());
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */]])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(348);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_story_add_story__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_todo_add_todo__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_other_other__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_to_do_to_do__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_subhome_subhome__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_story_capsule_story_capsule__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_data_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_img_viewer__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic3_calendar__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_other_other__["a" /* OtherPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_subhome_subhome__["a" /* SubhomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_to_do_to_do__["a" /* ToDoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_story_capsule_story_capsule__["a" /* StoryCapsulePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_story_add_story__["a" /* AddStoryPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_todo_add_todo__["a" /* AddTodoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-story/add-story.module#AddStoryPageModule', name: 'AddStoryPage', segment: 'add-story', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-todo/add-todo.module#AddTodoPageModule', name: 'AddTodoPage', segment: 'add-todo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/subhome/subhome.module#SubhomePageModule', name: 'SubhomePage', segment: 'subhome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/story-capsule/story-capsule.module#StoryCapsulePageModule', name: 'StoryCapsulePage', segment: 'story-capsule', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/to-do/to-do.module#ToDoPageModule', name: 'ToDoPage', segment: 'to-do', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_16_ionic_img_viewer__["a" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_17_ionic3_calendar__["a" /* CalendarModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_other_other__["a" /* OtherPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_subhome_subhome__["a" /* SubhomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_to_do_to_do__["a" /* ToDoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_story_capsule_story_capsule__["a" /* StoryCapsulePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_story_add_story__["a" /* AddStoryPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_todo_add_todo__["a" /* AddTodoPage */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_data_data__["a" /* DataProvider */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_other_other__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.initializeApp();
        platform.ready().then(function () {
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Tabs Page', component: __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */] },
            //{ title: 'Subhome Page', component: SubhomePage },
            { title: 'Other Page', component: __WEBPACK_IMPORTED_MODULE_4__pages_other_other__["a" /* OtherPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Projects\FamilyInn\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar color="secondary">\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n   \n\n    <ion-content>\n\n      <ion-list>\n\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n   \n\n  </ion-menu>\n\n   \n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\Projects\FamilyInn\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 213,
	"./af.js": 213,
	"./ar": 214,
	"./ar-dz": 215,
	"./ar-dz.js": 215,
	"./ar-kw": 216,
	"./ar-kw.js": 216,
	"./ar-ly": 217,
	"./ar-ly.js": 217,
	"./ar-ma": 218,
	"./ar-ma.js": 218,
	"./ar-sa": 219,
	"./ar-sa.js": 219,
	"./ar-tn": 220,
	"./ar-tn.js": 220,
	"./ar.js": 214,
	"./az": 221,
	"./az.js": 221,
	"./be": 222,
	"./be.js": 222,
	"./bg": 223,
	"./bg.js": 223,
	"./bm": 224,
	"./bm.js": 224,
	"./bn": 225,
	"./bn.js": 225,
	"./bo": 226,
	"./bo.js": 226,
	"./br": 227,
	"./br.js": 227,
	"./bs": 228,
	"./bs.js": 228,
	"./ca": 229,
	"./ca.js": 229,
	"./cs": 230,
	"./cs.js": 230,
	"./cv": 231,
	"./cv.js": 231,
	"./cy": 232,
	"./cy.js": 232,
	"./da": 233,
	"./da.js": 233,
	"./de": 234,
	"./de-at": 235,
	"./de-at.js": 235,
	"./de-ch": 236,
	"./de-ch.js": 236,
	"./de.js": 234,
	"./dv": 237,
	"./dv.js": 237,
	"./el": 238,
	"./el.js": 238,
	"./en-au": 239,
	"./en-au.js": 239,
	"./en-ca": 240,
	"./en-ca.js": 240,
	"./en-gb": 241,
	"./en-gb.js": 241,
	"./en-ie": 242,
	"./en-ie.js": 242,
	"./en-nz": 243,
	"./en-nz.js": 243,
	"./eo": 244,
	"./eo.js": 244,
	"./es": 245,
	"./es-do": 246,
	"./es-do.js": 246,
	"./es-us": 247,
	"./es-us.js": 247,
	"./es.js": 245,
	"./et": 248,
	"./et.js": 248,
	"./eu": 249,
	"./eu.js": 249,
	"./fa": 250,
	"./fa.js": 250,
	"./fi": 251,
	"./fi.js": 251,
	"./fo": 252,
	"./fo.js": 252,
	"./fr": 253,
	"./fr-ca": 254,
	"./fr-ca.js": 254,
	"./fr-ch": 255,
	"./fr-ch.js": 255,
	"./fr.js": 253,
	"./fy": 256,
	"./fy.js": 256,
	"./gd": 257,
	"./gd.js": 257,
	"./gl": 258,
	"./gl.js": 258,
	"./gom-latn": 259,
	"./gom-latn.js": 259,
	"./gu": 260,
	"./gu.js": 260,
	"./he": 261,
	"./he.js": 261,
	"./hi": 262,
	"./hi.js": 262,
	"./hr": 263,
	"./hr.js": 263,
	"./hu": 264,
	"./hu.js": 264,
	"./hy-am": 265,
	"./hy-am.js": 265,
	"./id": 266,
	"./id.js": 266,
	"./is": 267,
	"./is.js": 267,
	"./it": 268,
	"./it.js": 268,
	"./ja": 269,
	"./ja.js": 269,
	"./jv": 270,
	"./jv.js": 270,
	"./ka": 271,
	"./ka.js": 271,
	"./kk": 272,
	"./kk.js": 272,
	"./km": 273,
	"./km.js": 273,
	"./kn": 274,
	"./kn.js": 274,
	"./ko": 275,
	"./ko.js": 275,
	"./ky": 276,
	"./ky.js": 276,
	"./lb": 277,
	"./lb.js": 277,
	"./lo": 278,
	"./lo.js": 278,
	"./lt": 279,
	"./lt.js": 279,
	"./lv": 280,
	"./lv.js": 280,
	"./me": 281,
	"./me.js": 281,
	"./mi": 282,
	"./mi.js": 282,
	"./mk": 283,
	"./mk.js": 283,
	"./ml": 284,
	"./ml.js": 284,
	"./mr": 285,
	"./mr.js": 285,
	"./ms": 286,
	"./ms-my": 287,
	"./ms-my.js": 287,
	"./ms.js": 286,
	"./my": 288,
	"./my.js": 288,
	"./nb": 289,
	"./nb.js": 289,
	"./ne": 290,
	"./ne.js": 290,
	"./nl": 291,
	"./nl-be": 292,
	"./nl-be.js": 292,
	"./nl.js": 291,
	"./nn": 293,
	"./nn.js": 293,
	"./pa-in": 294,
	"./pa-in.js": 294,
	"./pl": 295,
	"./pl.js": 295,
	"./pt": 296,
	"./pt-br": 297,
	"./pt-br.js": 297,
	"./pt.js": 296,
	"./ro": 298,
	"./ro.js": 298,
	"./ru": 299,
	"./ru.js": 299,
	"./sd": 300,
	"./sd.js": 300,
	"./se": 301,
	"./se.js": 301,
	"./si": 302,
	"./si.js": 302,
	"./sk": 303,
	"./sk.js": 303,
	"./sl": 304,
	"./sl.js": 304,
	"./sq": 305,
	"./sq.js": 305,
	"./sr": 306,
	"./sr-cyrl": 307,
	"./sr-cyrl.js": 307,
	"./sr.js": 306,
	"./ss": 308,
	"./ss.js": 308,
	"./sv": 309,
	"./sv.js": 309,
	"./sw": 310,
	"./sw.js": 310,
	"./ta": 311,
	"./ta.js": 311,
	"./te": 312,
	"./te.js": 312,
	"./tet": 313,
	"./tet.js": 313,
	"./th": 314,
	"./th.js": 314,
	"./tl-ph": 315,
	"./tl-ph.js": 315,
	"./tlh": 316,
	"./tlh.js": 316,
	"./tr": 317,
	"./tr.js": 317,
	"./tzl": 318,
	"./tzl.js": 318,
	"./tzm": 319,
	"./tzm-latn": 320,
	"./tzm-latn.js": 320,
	"./tzm.js": 319,
	"./uk": 321,
	"./uk.js": 321,
	"./ur": 322,
	"./ur.js": 322,
	"./uz": 323,
	"./uz-latn": 324,
	"./uz-latn.js": 324,
	"./uz.js": 323,
	"./vi": 325,
	"./vi.js": 325,
	"./x-pseudo": 326,
	"./x-pseudo.js": 326,
	"./yo": 327,
	"./yo.js": 327,
	"./zh-cn": 328,
	"./zh-cn.js": 328,
	"./zh-hk": 329,
	"./zh-hk.js": 329,
	"./zh-tw": 330,
	"./zh-tw.js": 330
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 416;

/***/ })

},[331]);
//# sourceMappingURL=main.js.map