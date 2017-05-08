import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class Details {

artist : string;
year : number;
song : string;

constructor (private navParams: NavParams) {}

ngOnInit(){

	this.artist = this.navParams.get('artist');

	this.year = this.navParams.get('year');

	this.song = this.navParams.get('song');

	// this.song = this.navParams.data;
	//-- this will exactly pull the object as it is and we can use it with dot (.) operator
	// like this : this temp = data; then: {{temp.song}}
}



}
