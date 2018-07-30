import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  title = 'app works!';
  private apiUrl= 'http://localhost:3000';
  data: any = {};

  constructor(public http: Http) { 
    console.log('Data service connected');
    this.getContacts();
    this.getData();
  }
  

  getData(){
    var x = "test";
     return this.http.get(this.apiUrl) 
     .map((res: Response) => res.json());
  }

  getContacts() {
      this.getData().subscribe(data =>{
      console.log(data);
      this.data = data
    });
  }
}
