import { Component } from '@angular/core';
import { DataService} from './services/data.service';
import { HttpClient, } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ='NASA SUITS 2018';
  user:string;
  age:number;
  email:string;
  address:address;
  array:string[];
  posts:Post[];
  isEdit: boolean = false;


  constructor(private http: HttpClient) { }

  callServer() {
    this.http.post('http://localhost:3000/', {

    })
    .subscribe(data => {
    console.log(data);
    });
}




  ngOnInit() {
/*     this.age =30;
    this.email = 'test@test.com'
    this.address = {
      street: '50 Main St',
      city: 'Boston',
      state: 'MA'
       }
   this.array = ['new']; */
  }

  
onClick(){
    console.log("--------------Simulation started--------------");

    setInterval(function createData(){
      console.log("OnClick"); 
    },1000);

    console.log("error search 1");



    //this.dataService.createData();
      // console.log(posts);
      // this.posts = posts;
        //console.log("error search 1");
    
    //interval = setInterval(Simulation.suitTelemetry.bind(null, time, decider),1000);
    //interval_switch = setInterval(SuitSwitch.SuitSwitch.bind(null,decider),1000);
}

addLog(log){
  console.log(log);
  this.array.unshift(log);
  return false;
}

deleteLog(log){
  for(let i=0;i<this.array.length;i++){
    if (this.array[i]== log){
      this.array.splice(i,1);
    }
  }
}

toggleEdit(){
  this.isEdit = !this.isEdit;
}

}


interface address{
  street: string,
  city:string,
  state:string,
}

interface Post{
  id: number,
  title: string,
  body: string,
  userid: number,

}
