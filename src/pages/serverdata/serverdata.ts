import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class Serverdata {
//7768038621167494812
//6176425095225385540

  private blogUrl: any = 'https://www.googleapis.com/blogger/v3/blogs/7768038621167494812/posts?fetchImages=false&status=live&maxResults=500&key=AIzaSyBp0a7ZCTaHTcAmo-bcnIYK1mpWL3yYWMY';
  private searchUrl: any ='https://www.googleapis.com/blogger/v3/blogs/6176425095225385540/posts/search?q=oppam&fetchBodies=true&orderBy=published&fields=items&key=AIzaSyBp0a7ZCTaHTcAmo-bcnIYK1mpWL3yYWMY';
  posts: any;
  constructor(private http: Http) { }

  getData() {
    return this.http.get(this.blogUrl)
      .map(
      (getResponse: Response) => {
        const lyrics = getResponse.json();
        return lyrics;
      }
      );
  }

  // searchData(){
  //   return this.http.get(this.searchUrl)
  //     .map(
  //     (searchResponse: Response) => {
  //       const lyricsList = searchResponse.json();
  //       return lyricsList;
  //     }
  //     );
  // }


  favoriteDatas(){
    
  }

}
