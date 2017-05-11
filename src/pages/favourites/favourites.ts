import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Serverdata } from '../serverdata/serverdata';
import { Response } from '@angular/http';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
  providers: [Serverdata]
})
export class Favourites implements OnInit {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private lyricsData : Serverdata,
    public loadCntrl : LoadingController) {}
ngOnInit(){
  this.serverDataCall();
}

lyrics: any[];

serverDataCall(){
  let loader = this.loadCntrl.create({
     content: "Please wait...",
     duration: 1000
   });
   loader.present();
  this.lyricsData.getData().subscribe(
   (lyrics) => this.lyrics = lyrics,
   (error) => console.log(error)
 );

}

}
