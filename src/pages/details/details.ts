import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class Details {

  title;
  song;

  constructor(private navParams: NavParams) { }

  ngOnInit() {

    this.title = this.navParams.get('title');
    this.song = this.navParams.get('content');
    this.song = this.song.replace(/<img[^>]*>/g, "");
    // this.song = this.song.replace(/<table[^>]*>/g,"");

    // console.log(this.navParams.get('title'));
    console.log('content strts here!!!');
    console.log(this.song);
    // this.song = this.navParams.data;
    //-- this will exactly pull the object as it is and we can use it with dot (.) operator
    // like this : this temp = data; then: {{temp.song}}
  }



}
