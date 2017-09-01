import { Component } from '@angular/core';
import { NavController,Platform, NavParams,LoadingController } from 'ionic-angular';
import {File} from '@ionic-native/file';
declare var cordova: any;
declare var window :any;
declare var Media :any;
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [ File]
})
export class ListPage {
  storageDirectory: string = '';
  constructor(public platform: Platform,
    private file: File,public loading: LoadingController,public navCtrl: NavController,
     public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
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
  selectedItem: any;

  info:any[];
  listDir(){
    this.file.listDir(this.storageDirectory,"")
    .then((entry)=>{

    this.info=entry;
    console.log(this.info[0],this.info.length);
  
    console.log(this.info);
  }).catch(
    (err) => {
    console.log(err);
        }
);
  }
  ionViewWillEnter() {
    
    let loader = this.loading.create({
      content: 'Getting latest entries...',
    });
  
    loader.present().then(() => {
      
      this.listDir();
     
      loader.dismiss();
    });
  }
  

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
   console.log("tapped");
  }
}
