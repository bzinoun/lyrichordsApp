import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Serverdata } from '../serverdata/serverdata';
import { Response } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StorageService } from '../../services/storageservice';
import { Lyrics } from '../../models/lyrics';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
  providers: [Serverdata]
})
export class Favourites implements OnInit {
  lists : Lyrics[] =[];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private lyricsData: Serverdata,
              public loadCntrl: LoadingController,
              private getFav : StorageService) { }

  ngOnInit() {
    this.getFav.fetchItem()
    .then(
      (lists: Lyrics[]) => this.lists = lists
    );

  }

}
