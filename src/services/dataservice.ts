import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class DataService{
private blogUrl: any = 'https://www.googleapis.com/blogger/v3/blogs/7768038621167494812/posts?fetchImages=false&status=live&maxResults=500&key=AIzaSyBp0a7ZCTaHTcAmo-bcnIYK1mpWL3yYWMY';


constructor(private http: Http){}
getData() {
  return this.http.get(this.blogUrl)
    .map(
    (getResponse: Response) => {
      const lyrics = getResponse.json();
      return lyrics;
    }
    );
}
}
