import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Search } from '../search/search';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  searchLyrics () {
  	this.navCtrl.push(Search);
  }

}
