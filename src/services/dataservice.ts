import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Network } from '@ionic-native/network';

@Injectable()

export class DataService {
  private blogUrl: any = 'https://www.googleapis.com/blogger/v3/blogs/6176425095225385540/posts?fetchImages=false&status=live&maxResults=500&key=AIzaSyBp0a7ZCTaHTcAmo-bcnIYK1mpWL3yYWMY';
  public lyrics : any[];

  constructor(private http: Http, private network: Network) {
    this.getData().subscribe(
      (lyrics) => this.lyrics = lyrics.items,
      (error) => console.log(error)
    );
   }

  getData() {
    return this.http.get(this.blogUrl)
      .map(
      (getResponse: Response) => {
        const lyrics = getResponse.json();
        return lyrics;
      }
      );
  }



  filterItems(searchTerm){
  	    return this.lyrics.filter((item) => {
  	    	return item.content.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  	    });

  	}
}
