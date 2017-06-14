import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Details } from '../details/details';
import { LoadingController } from 'ionic-angular';
import { Response } from '@angular/http';
import { StorageService } from '../../services/storageservice';
import { DataService } from '../../services/dataservice';
import { Network } from '@ionic-native/network';
import { ConnectionPage } from '../connection/connection';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public lyrics: any[];
  constructor(private network: Network,
    public navCtrl: NavController,
    public navParams: NavParams,
    private lyricsData: DataService,
    public loadCntrl: LoadingController,
    public storeIt: StorageService,
    public toast: ToastController) { }

  ngOnInit() {
    this.serverDataCall();
    this.loadingTimer();
  }

  // ionViewDidEnter() {
  //   this.network.onConnect().subscribe(data => console.log('It works: connected!'), error => console.log('error occured!'));
  //   this.network.onDisconnect().subscribe(data => this.connectionFailed(), error => console.log('error occured!'));
  //
  // }
  // //http data from service fetch here

  serverDataCall() {

    // this.lyricsData.testCall();
    this.lyricsData.getData().subscribe(
      (lyrics) => this.lyrics = lyrics,
      (error) => console.log(error)
    );
  }
  //end of http calls

  // Make cards favourite here
  makeFav(data) {
    if (this.storeIt.checkItem(data.id) === false) {
      this.storeIt.storeItem(data.title, data.content, data.id);
      this.favClickedStatus();
    }
    else if(this.storeIt.checkItem(data.id) === true) {
      this.storeIt.getIndexOfAlreadySaved({title: data.title, content: data.content, id: data.id});
      this.alreadySaved();
    }

  }

  // favourite ends here


  //Navigation works here
  searchLyrics(tempData) {
    this.navCtrl.push(Details, tempData,
      {
        direction: 'forward',
        duration: 200,
        easing: 'ease-in'
      });
  }

  connectionFailed() {
    this.navCtrl.push(ConnectionPage,
      {
        direction: 'forward',
        duration: 200,
        easing: 'ease-in'
      });
  }

  //-----------------------------
  //All timer functions from here
  //-----------------------------

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
    let toast = this.toast.create({
      message: 'Added to Favourites!',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  //already saved warning
  alreadySaved() {
    let toast = this.toast.create({
      message: 'Removed from Favourites!',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }





  //ends here
}
