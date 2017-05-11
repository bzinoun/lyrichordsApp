import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Details } from '../details/details';
import { LoadingController } from 'ionic-angular';
import { Serverdata } from '../serverdata/serverdata';
import { Response } from '@angular/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public lyrics: any[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private lyricsData: Serverdata,
    public loadCntrl: LoadingController,
    private storage: Storage) { }

  ngOnInit() {
    this.serverDataCall();
    this.loadingTimer();
  }

  //http data from service fetch here
  serverDataCall() {
    this.lyricsData.getData().subscribe(
      (lyrics) => this.lyrics = lyrics,
      (error) => console.log(error)
    );
  }
  //loading timer function
  loadingTimer() {
    let loader = this.loadCntrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
  //clicked status function
  favClickedStatus() {
    let loader = this.loadCntrl.create({
      content: "Saving..",
      duration: 300
    });
    loader.present();
  }
  //Navigation works here
  searchLyrics(tempData) {
    this.navCtrl.push(Details, tempData,
      { //third argument is an object defining the animation of the navigation
        direction: 'forward', // default for push is 'forward'
        duration: 200, // 1 seconds
        easing: 'ease-in'
      });
  }

  //Favourites function
  makeFav(favData) {
    console.log(favData.title + ' clicked!');
    this.favClickedStatus();
  }

  //ends here
}
