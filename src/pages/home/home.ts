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
  //end of http calls

  // Make cards favourite here
  makeFav(data) {
    if(this.storeIt.checkItem(data.id) === false){
      this.storeIt.storeItem(data.title, data.content, data.id);
      this.favClickedStatus();
    }
      else {
        this.alreadySaved();
      }
  //
  // this.storeIt.checkItem(data.id);
  // this.storeIt.storeItem(data.title, data.content, data.id);
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
      let loader = this.loadCntrl.create({
        content: "Saving..",
        duration: 500
      });
      loader.present();
    }
//already saved warning
    alreadySaved() {
      let loader = this.loadCntrl.create({
        content: "Already saved!",
        duration: 500
      });
      loader.present();
    }

  //ends here
}
