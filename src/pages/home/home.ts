import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Search } from '../search/search';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

lyricsDatas = [
	{ artist : 'Lord', song : 'Royals', year : '2015'},
	{ artist : 'Bruno Mars', song : 'Uptown Funk', year: '2015' },
	{ artist : 'John Legend', song : 'All of me', year : '2016' },
	{ artist : 'Lord', song : 'Royals', year : '2015'},
	{ artist : 'Bruno Mars', song : 'Uptown Funk', year: '2015' },
	{ artist : 'John Legend', song : 'All of me', year : '2016' }
];

  constructor(public navCtrl: NavController, public loadCntrl: LoadingController) {

  }

  searchLyrics (tempData) {
  	// let loader = this.loadCntrl.create({
   //    content: "Please wait...",
   //    duration: 3000
   //  });
   //  loader.present();

  	this.navCtrl.push(Search, tempData,
  	{ //third argument is an object defining the animation of the navigation
  		direction: 'forward', // default for push is 'forward'
    	duration: 1000, // 1 seconds
    	easing: 'ease-in'
    });
  }

}
