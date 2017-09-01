import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule }    from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {YoutubeService} from '../services/youtubeApi.service';
import { NativeAudio } from '@ionic-native/native-audio';
import {DownloadPage} from '../pages/download/download';
import{YoutubePipe} from '../pipes/youtube/youtube';
import { IonicAudioModule, AudioProvider, WebAudioProvider, defaultAudioProviderFactory, CordovaMediaProvider } from 'ionic-audio';

export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DownloadPage,
    YoutubePipe,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DownloadPage,    
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    NativeAudio,
    YoutubeService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
