import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Search } from '../search/search';
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

  constructor(public navCtrl: NavController) {

  }

  searchLyrics (tempData) {
  	this.navCtrl.push(Search, tempData);
  }

}
