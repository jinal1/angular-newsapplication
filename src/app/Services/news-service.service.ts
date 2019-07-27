import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs-compat';
@Injectable()
export class NewsServiceService {

  constructor(private http: Http) { }

    commentsUrl;
  getNewsList(sectionName): Observable<any>
  {
    this.commentsUrl='https://api.nytimes.com/svc/topstories/v2/'+sectionName + '.json?api-key=315a5a51483b469a918246dc2753b339';
    console.log(this.commentsUrl);
     return this.http.get(this.commentsUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         //.catch((error:any) => Observable.throw//(error.json().error || 'Server error'));
    
  }

}