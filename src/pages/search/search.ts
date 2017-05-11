import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {


constructor (private navParams: NavParams, public loadCntrl: LoadingController) {}

  ngOnInit(){

  }

}
