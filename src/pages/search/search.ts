import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/dataservice';
import { Details } from '../details/details';
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search implements OnInit{


  	searchTerm: string = '';
  	searchControl: FormControl;
  	lyrics : any[];
  	searching: any = false;
    searchEnd: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dataService: DataService) {
		this.searchControl = new FormControl();
    this.lyrics = dataService.lyrics;

	}

ngOnInit(){
  this.searchEnd = false;
}

ngOnDestroy(){
  this.searchEnd = true;
}


  //Navigation works here
  searchLyrics(tempData) {
    this.navCtrl.push(Details, tempData,
      {
        direction: 'forward',
        duration: 200,
        easing: 'ease-in'
      });
  }


  ionViewDidLoad() {

  	    this.setFilteredItems();

  	    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

  	    	this.searching = false;
  	    	this.setFilteredItems();
          this.searchEnd = true;
  	    });
  	}

  	onSearchInput(){
  		this.searching = true;
  	}

  	setFilteredItems() {

  		this.lyrics = this.dataService.filterItems(this.searchTerm);

  	}
}
