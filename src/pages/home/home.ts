import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {YoutubeService} from '../../services/youtubeApi.service';
import { NativeAudio } from '@ionic-native/native-audio';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { DownloadPage } from "../download/download";
import{YoutubePipe} from '../../pipes/youtube/youtube';
declare var cordova: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})

export class HomePage {

videoArr:any[]=[];
  videoUrl: SafeResourceUrl;
  constructor(private nativeAudio: NativeAudio,private domSanitizer: DomSanitizer,
    public loading: LoadingController,public navCtrl: NavController,private yservice:YoutubeService) {

    
  }
  
   

  
//video item from server
  items: any[];

  getItems(ev: any) {
  
    let loader = this.loading.create({
      content: 'Getting latest entries...',
    });
  
    loader.present().then(() => {
      this.yservice.getResults(ev).subscribe(data=>{
        console.log("success");
       
        this.items=data.items;
        for(let i=0;i<this.items.length;i++){
          this.videoArr[i]=

          {
            videourl:"https://youtube2mp3.me/@api/json/mp3/"+this.items[i].id.videoId,
            videolink:"https://www.youtube.com/embed/"+this.items[i].id.videoId,
            videoId:this.items[i].id.videoId,
            videoName:this.items[i].snippet.channelTitle,
            videoDes:this.items[i].snippet.description,
            videoThumbnail:this.items[i].snippet.thumbnails.medium.url
          };


        }
        console.log(this.videoArr);
        console.log(data);
    },err=>{
      alert(err);
      console.log(err);
    });
    
      loader.dismiss();
    });
  }
  downloadPage(i:any){
    this.navCtrl.push(DownloadPage, {
      downloadInfo: this.videoArr[i]
  });
  }
}
