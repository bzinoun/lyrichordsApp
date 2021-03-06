import { Component, OnChanges } from '@angular/core';
import { HomePage } from '../home/home';
import { Search } from '../search/search';
import { Favourites } from '../favourites/favourites';

@Component({
  selector: 'page-tabs',
  template: `
<ion-tabs>
	<ion-tab [root] = "homePage" tabTitle="Home" tabIcon="home"></ion-tab>
  <ion-tab [root] = "searchPage" tabTitle="Search" tabIcon="search"></ion-tab>
  <ion-tab [root] = "favouritePage" tabTitle="Favourites" tabIcon="md-attach"></ion-tab>
</ion-tabs>
  `
})
export class Tabs {



  homePage = HomePage;
  searchPage = Search;
  favouritePage = Favourites;


}
