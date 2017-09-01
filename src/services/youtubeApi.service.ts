import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class YoutubeService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {

     }
     // private instance variable to hold base url
     
     getResults(body:any) : Observable<any> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers });
                 // ...using get request
                 return this.http.post("http://192.168.1.65:9000/search",{search:body},options)
                                // ...and calling .json() on the response to return data
                                 .map((res:any) =>res.json())
                                 //...errors if any
                                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
             }

        getDownload(url:any): Observable<any>{

            let bodyString = JSON.stringify(url); // Stringify payload
            let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
            let options       = new RequestOptions({ headers: headers });
                     // ...using get request
                     return this.http.get(url)
                                    // ...and calling .json() on the response to return data
                                     .map((res:any) =>res.json())
                                     //...errors if any
                                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        }


}