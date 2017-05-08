import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Serverdata } from '../serverdata/serverdata';
import { Response } from '@angular/http';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
  providers: [Serverdata]
})
export class Favourites {
  constructor(public navCtrl: NavController, public navParams: NavParams, private lyricsData : Serverdata) {}

lyrics: any[];

serverDataCall(){
  this.lyricsData.getData().subscribe(
   (lyrics) => this.lyrics = lyrics,
   (error) => console.log(error)
 );

}

}
