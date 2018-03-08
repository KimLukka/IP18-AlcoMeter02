webpackJsonp([1],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Viktor\Desktop\GITKRAKENCOMMIT\FinlandInternationalProject2ea2Groep2AlcoMeter\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-slides pager>\n\n\n\n  <ion-slide  style="background-image: url(../assets/imgs/Slide1.png)">\n\n  </ion-slide>\n\n\n\n  <ion-slide  style="background-image: url(../assets/imgs/Slide2.png)">\n\n  </ion-slide>\n\n\n\n  <ion-slide  style="background-image: url(../assets/imgs/Slide3.png)">\n\n  </ion-slide>\n\n\n\n</ion-slides>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Viktor\Desktop\GITKRAKENCOMMIT\FinlandInternationalProject2ea2Groep2AlcoMeter\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/result/result.module": [
		449,
		0
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(324);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Viktor\Desktop\GITKRAKENCOMMIT\FinlandInternationalProject2ea2Groep2AlcoMeter\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Viktor\Desktop\GITKRAKENCOMMIT\FinlandInternationalProject2ea2Groep2AlcoMeter\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["DangerZone", "Blue", "Yellow", "SafeZone", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ContactPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], ContactPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], ContactPage.prototype, "lineCanvas", void 0);
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Viktor\Desktop\GITKRAKENCOMMIT\FinlandInternationalProject2ea2Groep2AlcoMeter\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Charts\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n \n\n  <ion-card>\n\n    <ion-card-header>\n\n      Bar Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Doughnut Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #doughnutCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Line Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #lineCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n'/*ion-inline-end:"C:\Users\Viktor\Desktop\GITKRAKENCOMMIT\FinlandInternationalProject2ea2Groep2AlcoMeter\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(106);
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
    function HomePage() {
        this.rs = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Viktor\Desktop\GITKRAKENCOMMIT\FinlandInternationalProject2ea2Groep2AlcoMeter\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Welcome to Alcometer</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <img src="https://images.unsplash.com/photo-1474500257816-6f941168c7e7?ixlib=rb-0.3.5&s=15cfd4b2ed2bf9afeead872f17e39749&auto=format&fit=crop&w=1050&q=80"/>\n\n    </ion-card>\n\n    \n\n    \n\n  <button [navPush]="rs" ion-button full>Start Test</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Viktor\Desktop\GITKRAKENCOMMIT\FinlandInternationalProject2ea2Groep2AlcoMeter\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(202);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Viktor\Desktop\GITKRAKENCOMMIT\FinlandInternationalProject2ea2Groep2AlcoMeter\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Viktor\Desktop\GITKRAKENCOMMIT\FinlandInternationalProject2ea2Groep2AlcoMeter\IP18-AlcoMeter02\AlcoMeterUI - Copy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 209,
	"./af.js": 209,
	"./ar": 210,
	"./ar-dz": 211,
	"./ar-dz.js": 211,
	"./ar-kw": 212,
	"./ar-kw.js": 212,
	"./ar-ly": 213,
	"./ar-ly.js": 213,
	"./ar-ma": 214,
	"./ar-ma.js": 214,
	"./ar-sa": 215,
	"./ar-sa.js": 215,
	"./ar-tn": 216,
	"./ar-tn.js": 216,
	"./ar.js": 210,
	"./az": 217,
	"./az.js": 217,
	"./be": 218,
	"./be.js": 218,
	"./bg": 219,
	"./bg.js": 219,
	"./bn": 220,
	"./bn.js": 220,
	"./bo": 221,
	"./bo.js": 221,
	"./br": 222,
	"./br.js": 222,
	"./bs": 223,
	"./bs.js": 223,
	"./ca": 224,
	"./ca.js": 224,
	"./cs": 225,
	"./cs.js": 225,
	"./cv": 226,
	"./cv.js": 226,
	"./cy": 227,
	"./cy.js": 227,
	"./da": 228,
	"./da.js": 228,
	"./de": 229,
	"./de-at": 230,
	"./de-at.js": 230,
	"./de-ch": 231,
	"./de-ch.js": 231,
	"./de.js": 229,
	"./dv": 232,
	"./dv.js": 232,
	"./el": 233,
	"./el.js": 233,
	"./en-au": 234,
	"./en-au.js": 234,
	"./en-ca": 235,
	"./en-ca.js": 235,
	"./en-gb": 236,
	"./en-gb.js": 236,
	"./en-ie": 237,
	"./en-ie.js": 237,
	"./en-nz": 238,
	"./en-nz.js": 238,
	"./eo": 239,
	"./eo.js": 239,
	"./es": 240,
	"./es-do": 241,
	"./es-do.js": 241,
	"./es.js": 240,
	"./et": 242,
	"./et.js": 242,
	"./eu": 243,
	"./eu.js": 243,
	"./fa": 244,
	"./fa.js": 244,
	"./fi": 245,
	"./fi.js": 245,
	"./fo": 246,
	"./fo.js": 246,
	"./fr": 247,
	"./fr-ca": 248,
	"./fr-ca.js": 248,
	"./fr-ch": 249,
	"./fr-ch.js": 249,
	"./fr.js": 247,
	"./fy": 250,
	"./fy.js": 250,
	"./gd": 251,
	"./gd.js": 251,
	"./gl": 252,
	"./gl.js": 252,
	"./gom-latn": 253,
	"./gom-latn.js": 253,
	"./he": 254,
	"./he.js": 254,
	"./hi": 255,
	"./hi.js": 255,
	"./hr": 256,
	"./hr.js": 256,
	"./hu": 257,
	"./hu.js": 257,
	"./hy-am": 258,
	"./hy-am.js": 258,
	"./id": 259,
	"./id.js": 259,
	"./is": 260,
	"./is.js": 260,
	"./it": 261,
	"./it.js": 261,
	"./ja": 262,
	"./ja.js": 262,
	"./jv": 263,
	"./jv.js": 263,
	"./ka": 264,
	"./ka.js": 264,
	"./kk": 265,
	"./kk.js": 265,
	"./km": 266,
	"./km.js": 266,
	"./kn": 267,
	"./kn.js": 267,
	"./ko": 268,
	"./ko.js": 268,
	"./ky": 269,
	"./ky.js": 269,
	"./lb": 270,
	"./lb.js": 270,
	"./lo": 271,
	"./lo.js": 271,
	"./lt": 272,
	"./lt.js": 272,
	"./lv": 273,
	"./lv.js": 273,
	"./me": 274,
	"./me.js": 274,
	"./mi": 275,
	"./mi.js": 275,
	"./mk": 276,
	"./mk.js": 276,
	"./ml": 277,
	"./ml.js": 277,
	"./mr": 278,
	"./mr.js": 278,
	"./ms": 279,
	"./ms-my": 280,
	"./ms-my.js": 280,
	"./ms.js": 279,
	"./my": 281,
	"./my.js": 281,
	"./nb": 282,
	"./nb.js": 282,
	"./ne": 283,
	"./ne.js": 283,
	"./nl": 284,
	"./nl-be": 285,
	"./nl-be.js": 285,
	"./nl.js": 284,
	"./nn": 286,
	"./nn.js": 286,
	"./pa-in": 287,
	"./pa-in.js": 287,
	"./pl": 288,
	"./pl.js": 288,
	"./pt": 289,
	"./pt-br": 290,
	"./pt-br.js": 290,
	"./pt.js": 289,
	"./ro": 291,
	"./ro.js": 291,
	"./ru": 292,
	"./ru.js": 292,
	"./sd": 293,
	"./sd.js": 293,
	"./se": 294,
	"./se.js": 294,
	"./si": 295,
	"./si.js": 295,
	"./sk": 296,
	"./sk.js": 296,
	"./sl": 297,
	"./sl.js": 297,
	"./sq": 298,
	"./sq.js": 298,
	"./sr": 299,
	"./sr-cyrl": 300,
	"./sr-cyrl.js": 300,
	"./sr.js": 299,
	"./ss": 301,
	"./ss.js": 301,
	"./sv": 302,
	"./sv.js": 302,
	"./sw": 303,
	"./sw.js": 303,
	"./ta": 304,
	"./ta.js": 304,
	"./te": 305,
	"./te.js": 305,
	"./tet": 306,
	"./tet.js": 306,
	"./th": 307,
	"./th.js": 307,
	"./tl-ph": 308,
	"./tl-ph.js": 308,
	"./tlh": 309,
	"./tlh.js": 309,
	"./tr": 310,
	"./tr.js": 310,
	"./tzl": 311,
	"./tzl.js": 311,
	"./tzm": 312,
	"./tzm-latn": 313,
	"./tzm-latn.js": 313,
	"./tzm.js": 312,
	"./uk": 314,
	"./uk.js": 314,
	"./ur": 315,
	"./ur.js": 315,
	"./uz": 316,
	"./uz-latn": 317,
	"./uz-latn.js": 317,
	"./uz.js": 316,
	"./vi": 318,
	"./vi.js": 318,
	"./x-pseudo": 319,
	"./x-pseudo.js": 319,
	"./yo": 320,
	"./yo.js": 320,
	"./zh-cn": 321,
	"./zh-cn.js": 321,
	"./zh-hk": 322,
	"./zh-hk.js": 322,
	"./zh-tw": 323,
	"./zh-tw.js": 323
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
webpackContext.id = 431;

/***/ })

},[325]);
//# sourceMappingURL=main.js.map