import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { catchError } from '../../../node_modules/rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpResponse } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  title = 'app works!';
  private apiUrl= 'http://localhost:3000/';
  data: any = {};

  constructor(private http: Http) { 
    console.log('Data service connected');
  }

  createData(){

    console.log("createData"); 

 }


  getData(){
     return this.http.get(this.apiUrl) 
     .pipe(map(this.extractData),
       catchError( this.handleErrorObservable)
  );
  }

  private extractData(res: Response)
  {
    // let body = res.json();
    let body = JSON.parse('{ "myString": "string", "myNumber": 4 }');
    return body;
  }

  private handleErrorObservable (error: Response | any)
  {
    return throwError(error.message || error);
  }

}
