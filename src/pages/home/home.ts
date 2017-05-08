import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Details } from '../details/details';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lyricsDatas = [
    { artist: 'Lord', song: 'Royals', year: '2015', favourite: '' },
    { artist: 'Bruno Mars', song: 'Uptown Funk', year: '2015',favourite: '' },
    { artist: 'John Legend', song: 'All of me', year: '2016', favourite: '' },
    { artist: 'Lord', song: 'Royals', year: '2015', favourite: '' },
    { artist: 'Bruno Mars', song: 'Uptown Funk', year: '2015', favourite: '' },
    { artist: 'John Legend', song: 'All of me', year: '2016', favourite: '' },
    { artist: 'Lord', song: 'Royals', year: '2015', favourite: '' },
    { artist: 'Bruno Mars', song: 'Uptown Funk', year: '2015', favourite: '' },
    { artist: 'John Legend', song: 'All of me', year: '2016', favourite: '' },
    { artist: 'Lord', song: 'Royals', year: '2015', favourite: '' },
    { artist: 'Bruno Mars', song: 'Uptown Funk', year: '2015' , favourite: ''},
    { artist: 'John Legend', song: 'All of me', year: '2016' , favourite: ''}
  ];

  constructor(public navCtrl: NavController, public loadCntrl: LoadingController) {
//, public favStorage: Storage
  }

  searchLyrics(tempData) {
    // let loader = this.loadCntrl.create({
    //    content: "Please wait...",
    //    duration: 3000
    //  });
    //  loader.present();
    this.navCtrl.push(Details, tempData,
      { //third argument is an object defining the animation of the navigation
        direction: 'forward', // default for push is 'forward'
        duration: 1000, // 1 seconds
        easing: 'ease-in'
      });
  }


  makeFav(favData){

console.log(favData.artist + ' clicked!');

  }

}
