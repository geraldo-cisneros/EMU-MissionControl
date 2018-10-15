//Imports list
import { Component} from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { EMUService } from './services/emu.service';

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
  startSimulation() {
    this.http.post('http://localhost:3000/api/simulation/start',  {
    })
    .subscribe(data => {
    console.log(data);
    }); 
    //updates data every 1 second
    interval_switch = setInterval(() => { this.getData() }, 1000);
    console.log('server is running...');
}

//STOPS THE SERVER AND DATA STREAM
  stopSimulation() {
    this.http.post('http://localhost:3000/api/simulation/stop', {
    })
    .subscribe(data => {
    console.log(data);
    });
    clearInterval(interval_switch );
    console.log('server has stopped');
  }

  //SIMULATION IS PAUSED
  pauseSimulation(){this.http.post('http://localhost:3000/api/simulation/pause', {
  })
  .subscribe(data => {
  console.log(data);
  });
}

//SIMULATION IS RESUMED
resumeSimulation(){this.http.post('http://localhost:3000/api/simulation/unpause', {
})
.subscribe(data => {
console.log(data);
});
}

//DEPLOYS FAN ERROR
  deployError(){this.http.patch('http://localhost:3000/api/simulation/deployerror?fan_error=true', {
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

