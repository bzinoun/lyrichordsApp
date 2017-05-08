import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Search } from '../pages/search/search';
import { Details } from '../pages/details/details';
import { Favourites } from '../pages/favourites/favourites';
import { Tabs } from '../pages/tabs/tabs';
import { Serverdata } from '../pages/serverdata/serverdata';

 @NgModule({
  declarations: [
    MyApp,
    HomePage,
    Search,
    Favourites,
    Details,
    Tabs
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Search,
    Favourites,
    Details,
    Tabs
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Serverdata,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
