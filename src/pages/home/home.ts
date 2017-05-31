import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Details } from '../details/details';
import { LoadingController } from 'ionic-angular';
import { Response } from '@angular/http';
import { StorageService } from '../../services/storageservice';
import { DataService } from '../../services/dataservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public lyrics: any[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private lyricsData: DataService,
    public loadCntrl: LoadingController,
    public storeIt: StorageService) { }

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


  //Favourites function
  makeFav(data) {
  this.storeIt.storeItem(data.title, data.content);
  this.favClickedStatus();
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


  //loading timer function
  loadingTimer() {
    let loader = this.loadCntrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
  //ends here
}
