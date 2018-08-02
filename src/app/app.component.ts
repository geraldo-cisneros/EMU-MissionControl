import { Component} from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { EMUService } from './services/emu.service';
import { xemu } from './emu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title ='NASA SUITS 2019';
  public telems: xemu[];


 


  constructor(private http: HttpClient, private emu: EMUService) { 
    
  }
  ngOnInit() {
    this.emu.getEMU()
    .subscribe((data: xemu[]) => {this.telems = data;
    console.log(data);
    console.log('DATA!!!!!!!', this.telems);
    });
    console.log('server is running...');
}

  callServer() {
    this.http.post('http://localhost:3000/', {
    })
    .subscribe(data => {
    console.log(data);
    });
    console.log('server is running...');
}

  stopServer() {
    this.http.post('http://localhost:3000/contact', {
    })
    .subscribe(data => {
    console.log(data);
    });
    console.log('server has stopped');

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

/* addLog(log){
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
} */

}

