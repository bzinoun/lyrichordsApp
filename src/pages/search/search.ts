import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
/**
 * Generated class for the Search page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {

artist : string;
year : number;
song : string;

constructor (private navParams: NavParams) {}

ngOnInit(){

	this.artist = this.navParams.get('artist');

	this.year = this.navParams.get('year');

	this.song = this.navParams.get('song');
}


  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad Search');
  // }

}
