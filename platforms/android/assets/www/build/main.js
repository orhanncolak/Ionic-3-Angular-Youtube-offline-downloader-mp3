webpackJsonp([0],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YoutubeService = (function () {
    // Resolve HTTP using the constructor
    function YoutubeService(http) {
        this.http = http;
    }
    // private instance variable to hold base url
    YoutubeService.prototype.getResults = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // ...using get request
        return this.http.post("http://192.168.1.65:9000/search", { search: body }, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    YoutubeService.prototype.getDownload = function (url) {
        var bodyString = JSON.stringify(url); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // ...using get request
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return YoutubeService;
}());
YoutubeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], YoutubeService);

//# sourceMappingURL=youtubeApi.service.js.map

/***/ }),

/***/ 143:
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
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 186:
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
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_youtubeApi_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__download_download__ = __webpack_require__(257);
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
    function HomePage(nativeAudio, domSanitizer, loading, navCtrl, yservice) {
        this.nativeAudio = nativeAudio;
        this.domSanitizer = domSanitizer;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.yservice = yservice;
        this.videoArr = [];
    }
    HomePage.prototype.getItems = function (ev) {
        var _this = this;
        var loader = this.loading.create({
            content: 'Getting latest entries...',
        });
        loader.present().then(function () {
            _this.yservice.getResults(ev).subscribe(function (data) {
                console.log("success");
                _this.items = data.items;
                for (var i = 0; i < _this.items.length; i++) {
                    _this.videoArr[i] =
                        {
                            videourl: "https://youtube2mp3.me/@api/json/mp3/" + _this.items[i].id.videoId,
                            videolink: "https://www.youtube.com/embed/" + _this.items[i].id.videoId,
                            videoId: _this.items[i].id.videoId,
                            videoName: _this.items[i].snippet.channelTitle,
                            videoDes: _this.items[i].snippet.description,
                            videoThumbnail: _this.items[i].snippet.thumbnails.medium.url
                        };
                }
                console.log(_this.videoArr);
                console.log(data);
            }, function (err) {
                alert(err);
                console.log(err);
            });
            loader.dismiss();
        });
    };
    HomePage.prototype.downloadPage = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__download_download__["a" /* DownloadPage */], {
            downloadInfo: this.videoArr[i]
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/subbu/Desktop/youtube/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar #search1></ion-searchbar>\n\n  <button ion-button full (click)="getItems(search1.value)">Search</button>\n  \n<ion-list>\n  \n</ion-list>\n  <ion-list>\n    <ion-item *ngFor="let item of videoArr;let i=index;">\n      \n      {{ item }}\n      <ion-card>\n          <iframe width="100%" height="315" [src]="item.videolink | youtube1" frameborder="0" allowfullscreen>\n            </iframe>\n        <img [src]= item?.videoThumbnail/>\n        <ion-card-content>\n          <ion-card-title>\n            {{item?.videoName}}\n            </ion-card-title>\n          <p>\n            {{item?.videoDes}}\n          </p>\n        </ion-card-content>\n        <ion-row no-padding>\n          <ion-col>\n            <button ion-button clear small color="danger" icon-start (click)="downloadPage(i)">\n              <ion-icon name=\'star\'></ion-icon>\n              Download\n            </button>\n          </ion-col>\n  \n    </ion-row>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/subbu/Desktop/youtube/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_youtubeApi_service__["a" /* YoutubeService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_youtubeApi_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DownloadPage = (function () {
    function DownloadPage(nativeAudio, yservice, platform, transfer, file, alertCtrl, loading, navCtrl, navParams) {
        var _this = this;
        this.nativeAudio = nativeAudio;
        this.yservice = yservice;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageDirectory = '';
        this.info = navParams.get('downloadInfo');
        this.platform.ready().then(function () {
            // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
            if (!_this.platform.is('cordova')) {
                return false;
            }
            if (_this.platform.is('ios')) {
                _this.storageDirectory = cordova.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = cordova.file.externalDataDirectory;
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
    }
    DownloadPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log(this.info);
        var loader = this.loading.create({
            content: 'Getting latest entries...',
        });
        loader.present().then(function () {
            _this.yservice.getDownload(_this.info.videourl).subscribe(function (data) {
                console.log("success");
                console.log(data.vidInfo);
                _this.downInfo = data;
                console.log(_this.downInfo);
            }, function (err) {
                alert(err);
                console.log(err);
            });
            loader.dismiss();
        });
    };
    DownloadPage.prototype.listDir = function () {
        var _this = this;
        this.file.listDir(this.storageDirectory, "")
            .then(function (entry) {
            _this.info = entry[0];
            console.log(entry);
            //  console.log(this.test);
        }).catch(function (err) {
            console.log(err);
        });
    };
    DownloadPage.prototype.downloadSong = function () {
        var _this = this;
        console.log(this.downInfo.link);
        this.platform.ready().then(function () {
            var fileTransfer = _this.transfer.create();
            // const imageLocation = "www.youtubeinmp3.com/download/get/?i=rzwGMe1JfziQKUcfnvaWWWz5oHJo0e3Q&e=28";
            // console.log(imageLocation);
            fileTransfer.download("https:" + _this.downInfo.vidInfo[4].dloadUrl, _this.storageDirectory + _this.downInfo.vidTitle + ".mp3")
                .then(function (entry) {
                // console.log(entry.toInternalURL());
                //this.info=entry.toInternalURL();
                var alertSuccess = _this.alertCtrl.create({
                    title: "Download Succeeded!",
                    subTitle: _this.downInfo.vidTitle + " was successfully downloaded to: " + entry.toInternalURL(),
                    buttons: ['Ok']
                });
                alertSuccess.present();
            }, function (error) {
                var alertFailure = _this.alertCtrl.create({
                    title: " " + _this.downInfo.vidTitle + " Download Failed!",
                    subTitle: _this.downInfo.vidTitle + ".mp3" + " was not successfully downloaded. Error code: " + error.code,
                    buttons: ['Ok']
                });
                alertFailure.present();
            });
        });
    };
    DownloadPage.prototype.retrieveImage = function () {
        console.log();
        this.url = this.info.nativeURL;
        console.log(this.url);
        window.resolveLocalFileSystemURL(this.url, function (entry) {
            console.log('cdvfile URI: ' + entry.toInternalURL());
            this.url = entry.toInternalURL();
        });
        var my_media = new Media(this.url, 
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        }, 
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + JSON.stringify(err));
        });
        // Play audio
        my_media.play();
    };
    return DownloadPage;
}());
DownloadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-download',template:/*ion-inline-start:"/Users/subbu/Desktop/youtube/src/pages/download/download.html"*/'<!--\n  Generated template for the DownloadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>DownloadPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <button ion-button full (click)="downloadSong()">Download Song</button>\n   <button ion-button full (click)="listDir()">list Dir</button>\n   <button ion-button full (click)="retrieveImage()">ret</button>\n\n \n</ion-content>\n'/*ion-inline-end:"/Users/subbu/Desktop/youtube/src/pages/download/download.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["b" /* TransferObject */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_2__services_youtubeApi_service__["a" /* YoutubeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DownloadPage);

//# sourceMappingURL=download.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = (function () {
    function ListPage(platform, file, loading, navCtrl, navParams) {
        var _this = this;
        this.platform = platform;
        this.file = file;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageDirectory = '';
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.platform.ready().then(function () {
            // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
            if (!_this.platform.is('cordova')) {
                return false;
            }
            if (_this.platform.is('ios')) {
                _this.storageDirectory = cordova.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = cordova.file.externalDataDirectory;
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
    }
    ListPage.prototype.listDir = function () {
        var _this = this;
        this.file.listDir(this.storageDirectory, "")
            .then(function (entry) {
            _this.info = entry;
            console.log(_this.info[0], _this.info.length, _this.info);
            //  console.log(this.test);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Getting latest entries...',
        });
        loader.present().then(function () {
            _this.listDir();
            loader.dismiss();
        });
    };
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        console.log("tapped");
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/subbu/Desktop/youtube/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <button ion-button full (click)="listDir()">list Direct</button>\n  <ion-list>\n    <button ion-item *ngFor="let song of info" (click)="itemTapped($event, song)">\n      <ion-icon [name]="arrow-dropright-circle" item-left></ion-icon>\n      {{song?.name}}\n      <div class="item-note" item-right>\n        {{song?.name}}\n      </div>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/subbu/Desktop/youtube/src/pages/list/list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(270);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export myCustomAudioProviderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_youtubeApi_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_audio__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_download_download__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_youtube_youtube__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_audio__ = __webpack_require__(580);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new __WEBPACK_IMPORTED_MODULE_13_ionic_audio__["a" /* CordovaMediaProvider */]() : new __WEBPACK_IMPORTED_MODULE_13_ionic_audio__["c" /* WebAudioProvider */]();
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_download_download__["a" /* DownloadPage */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_youtube_youtube__["a" /* YoutubePipe */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_13_ionic_audio__["b" /* IonicAudioModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13_ionic_audio__["d" /* defaultAudioProviderFactory */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_download_download__["a" /* DownloadPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_9__services_youtubeApi_service__["a" /* YoutubeService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(259);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/subbu/Desktop/youtube/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/subbu/Desktop/youtube/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
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
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var YoutubePipe = (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function YoutubePipe(dom) {
        this.dom = dom;
    }
    YoutubePipe.prototype.transform = function (value, args) {
        console.log(value);
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    return YoutubePipe;
}());
YoutubePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'youtube1',
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], YoutubePipe);

//# sourceMappingURL=youtube.js.map

/***/ })

},[265]);
//# sourceMappingURL=main.js.map