import { Component } from '@angular/core';
import { DataService} from './services/data.service';
import { HttpClient, } from '@angular/common/http';
import { EMUService } from './services/emu.service'
;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ='NASA SUITS 2018';
  private EMU: Telem[] = [];
 


  constructor(private http: HttpClient) { }

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
  
  getData() {
    this.http.get<{EMU: Telem[]}>('http://localhost:3000/api/suit/recent', {
    })
    .subscribe(EMUData => {
      this.EMU = EMUData.EMU;
    });
    console.log(EMU)
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

export interface Telem{
  heart_bpm: string,
  p_sub: string,
  t_sub:string,
  v_fan:string,
  p_o2:string,
  rate_o2:string,
  cap_battery:string,
  p_h2o_g:string,
  p_h2o_l:string,
  p_sop:string,
  rate_sop:string,
  t_battery:string,
  t_oxygen:string,
  t_water:string
}


