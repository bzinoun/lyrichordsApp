import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Response } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StorageService } from '../../services/storageservice';
import { Lyrics } from '../../models/lyrics';
import { DataService } from '../../services/dataservice';
import { Details } from '../details/details';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
  providers: [DataService]
})
export class Favourites implements OnInit {
  lists : Lyrics[] =[];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadCntrl: LoadingController,
              private getFav : StorageService) { }

  ngOnInit() {
    this.getFav.fetchItem()
    .then(
      (lists: Lyrics[]) => this.lists = lists
    );

  }
// Delete item from favourite starts here

  onDelete(index) {
    this.getFav.deleteItem(index);
  }

// Delete items from favourites ends here

// Navigate to favourite content froom here

  searchLyrics(tempData) {
    this.navCtrl.push(Details, tempData,
      {
        direction: 'forward',
        duration: 200,
        easing: 'ease-in'
      });
  }
//end of details function here

}
