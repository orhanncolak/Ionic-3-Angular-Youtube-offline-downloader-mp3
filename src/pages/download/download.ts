import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, AlertController } from 'ionic-angular';
import {YoutubeService} from '../../services/youtubeApi.service';
import {Transfer, TransferObject} from '@ionic-native/transfer';
import {File} from '@ionic-native/file';
import { NativeAudio } from '@ionic-native/native-audio';

declare var cordova: any;
declare var window :any;
declare var Media :any;
@Component({
  selector: 'page-download',
  templateUrl: 'download.html',
  providers: [Transfer, TransferObject, File]
})
export class DownloadPage {
  storageDirectory: string = '';
  info:any;
  downInfo:any;
  constructor(private nativeAudio: NativeAudio,private yservice:YoutubeService,public platform: Platform,private transfer: Transfer,
     private file: File, public alertCtrl: AlertController,
    public loading: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    
    this.info = navParams.get('downloadInfo'); 
    this.platform.ready().then(() => {
      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      if(!this.platform.is('cordova')) {
        return false;
      }

      if (this.platform.is('ios')) {
        this.storageDirectory = cordova.file.documentsDirectory;
      }
      else if(this.platform.is('android')) {
        this.storageDirectory = cordova.file.externalDataDirectory;
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return false;
      }
    });
  }

  ionViewWillEnter() {
    console.log(this.info);
    let loader = this.loading.create({
      content: 'Getting latest entries...',
    });
  
    loader.present().then(() => {
      this.yservice.getDownload(this.info.videourl).subscribe(data=>{
        console.log("success");
        console.log(data.vidInfo);
        this.downInfo=data;
        console.log(this.downInfo);

    },err=>{
      alert(err);
     
      console.log(err);
    });
    
      loader.dismiss();
    });
  }
  test:any;

 listDir(){
    this.file.listDir(this.storageDirectory,"")
    .then((entry)=>{

    this.info=entry[0];
    console.log(entry);
  //  console.log(this.test);
  }).catch(
    (err) => {
    console.log(err);
        }
)     ;
  }
downloadSong() {

    console.log(this.downInfo.link);
        this.platform.ready().then(() => {
    
          const fileTransfer: TransferObject = this.transfer.create();
    
         // const imageLocation = "www.youtubeinmp3.com/download/get/?i=rzwGMe1JfziQKUcfnvaWWWz5oHJo0e3Q&e=28";
        // console.log(imageLocation);
          fileTransfer.download("https:"+this.downInfo.vidInfo[4].dloadUrl, this.storageDirectory + this.downInfo.vidTitle+".mp3")
          .then((entry) => {
           // console.log(entry.toInternalURL());
            //this.info=entry.toInternalURL();
          
            const alertSuccess = this.alertCtrl.create({
              title: `Download Succeeded!`,
              subTitle: `${this.downInfo.vidTitle} was successfully downloaded to: ${entry.toInternalURL()}`,
              buttons: ['Ok']
            });
           
            alertSuccess.present();
           
    
          }, (error) => {
    
            const alertFailure = this.alertCtrl.create({
              title: ` ${this.downInfo.vidTitle} Download Failed!`,
              subTitle: `${this.downInfo.vidTitle+".mp3"} was not successfully downloaded. Error code: ${error.code}`,
              buttons: ['Ok']
            });
    
            alertFailure.present();
    
          });
    
        });
        
  

}
url:any;
retrieveImage() {
    console.log();
    this.url=this.info.nativeURL;
    console.log(this.url);
    window.resolveLocalFileSystemURL(this.url, function(entry) {
      console.log('cdvfile URI: ' + entry.toInternalURL());
      this.url=entry.toInternalURL();
    });
    var my_media = new Media(this.url,
      // success callback
      function () {
          console.log("playAudio():Audio Success");
      },
      // error callback
      function (err) {
          console.log("playAudio():Audio Error: " + JSON.stringify(err));
      }
  );
  // Play audio
  my_media.play();
  }
    
      
    

}
