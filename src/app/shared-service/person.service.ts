import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpRequest } from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PersonService {
  private baseUrl:string="http://localhost:9080/transaction";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  constructor(private _http:HttpClient) {
   }

   
  getTransaction(): Observable<any>{
    return this._http.get(this.baseUrl+'/api')
    .catch(this.errorHandler);
  }
  getCount(): Observable<any>{
    return this._http.get(this.baseUrl+'/count')
    .catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error || "Server Error");
  }
}
