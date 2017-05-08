import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class Serverdata {

  private blogUrl: any = 'https://www.googleapis.com/blogger/v3/blogs/4999381715683698723/posts?key=AIzaSyBp0a7ZCTaHTcAmo-bcnIYK1mpWL3yYWMY';
  private testUrl: any = 'https://www.reddit.com/r/gifs/new/.json?limit=10';
  posts: any;
  constructor(private http: Http) { }

  getData() {
    return this.http.get(this.blogUrl)
      .map(
      (response: Response) => {
        const lyrics = response.json();
        return lyrics;
      }
      );



  }

}
