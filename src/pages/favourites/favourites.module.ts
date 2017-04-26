import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Favourites } from './favourites';

@NgModule({
  declarations: [
    Favourites,
  ],
  imports: [
    IonicPageModule.forChild(Favourites),
  ],
  exports: [
    Favourites
  ]
})
export class FavouritesModule {}
