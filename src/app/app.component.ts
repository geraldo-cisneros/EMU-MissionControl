//Imports list
import { Component} from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { EMUService } from './services/emu.service';
import { xemu } from './emu';

//Variables
var   interval_switch;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent {
  title ='NASA SUITS 2019';
  telems: {};

  constructor(private http: HttpClient, private emu: EMUService) {}


//STARTS THE SERVER AND DATA STREAM
  callServer() {
    this.http.post('http://localhost:3000/api/simulation/start', {
    })
    .subscribe(data => {
    console.log(data);
    }); 
    //updates data every .5 seconds
    interval_switch = setInterval(() => { this.getData() }, 500);
    console.log('server is running...');
}
//STOPS THE SERVER AND DATA STREAM
  stopServer() {
    this.http.post('http://localhost:3000/api/simulation/stop', {
    })
    .subscribe(data => {
    console.log(data);
    });
    clearInterval(interval_switch );
    console.log('server has stopped');
  }
//DEPLOYS FAN ERROR
  deployError(){this.http.post('http://localhost:3000/error-ready', {
  })
  .subscribe(data => {
  console.log(data);
  });
}
//GETS DATA FOR STREAM
  getData() {
    this.emu.getEMU()
    .subscribe(data => {this.telems = data;
      this.telems = Array.of(this.telems);
      console.log(this.telems)
    });
  }
  
}

