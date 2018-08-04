import { Component} from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { EMUService } from './services/emu.service';
import { xemu } from './emu';
import { interval } from '../../node_modules/rxjs';



var   interval_switch;
var   disabled = false;



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

}

//STARTS THE SERVER AND DATA STREAM
  callServer() {
    this.http.post('http://localhost:3000/', {
    })
    .subscribe(data => {
    console.log(data);
    });
    disabled = false;
    interval_switch = setInterval(() => { this.getData() }, 500);
    console.log('server is running...');
}
//STOPS THE SERVER AND DATA STREAM
  stopServer() {
    this.http.post('http://localhost:3000/contact', {
    })
    .subscribe(data => {
    console.log(data);
    });
    clearInterval(interval_switch );
    console.log('server has stopped');

  }
//GETS DATA FOR STREAM
  getData() {
    this.emu.getEMU()
    .subscribe((data: xemu[]) => {this.telems = data;
    });
  }

  buttonClick(status: boolean) {
    if (status == true){

    } 
  }
addMarker() {
  disabled = true;
}


onClick(){
    console.log("--------------Simulation started--------------");

    setInterval(function createData(){
      console.log("OnClick"); 
    },1000);

    console.log("error search 1");
  }
}

