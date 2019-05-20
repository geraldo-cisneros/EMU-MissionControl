//Imports list
import { Component} from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { EMUService } from './services/emu.service';


//Variables
var   interval_switch;
const url = 'http://localhost:3000'
const url2 = 'https://suits2019.herokuapp.com/'

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent {
  title ='NASA SUITS 2019';
  telems: {};
  uias: {}

  constructor(private http: HttpClient, private emu: EMUService) {}

//*************************************UIA****************************************

ngOnInit(){
  this.startUiaSimulation()
}
refresh(){
  location.reload()
}

//STARTS THE UIA SIMULATION 
startUiaSimulation() {
  this.http.post(url +'/api/simulation/uiastart',  {
  })
  .subscribe(data => {
  console.log(data);
  }); 
  //updates data every 1 second
  interval_switch = setInterval(() => { this.getUiaData() }, 1000);
  console.log('server is running...');
}
//STOPS THE SERVER AND DATA STREAM
stopUiaSimulation() {
  this.http.post(url + '/api/simulation/uiastop', {
  })
  .subscribe(data => {
  console.log(data);
  });
  clearInterval(interval_switch );
  console.log('uia has stopped');
}

  //SIMULATION IS PAUSED
  pauseUiaSimulation(){this.http.post(url + '/api/simulation/uiapause', {
  })
  .subscribe(data => {
  console.log(data);
  });
}

//UiaSIMULATION IS RESUMED
resumeUiaSimulation(){this.http.post(url + '/api/simulation/uiaunpause', {
})
.subscribe(data => {
console.log(data);
});
}


//***********************************Telemetry*************************************
//STARTS THE SERVER AND DATA STREAM
  startSimulation() {
    this.http.post(url + '/api/simulation/start',  {
    })
    .subscribe(data => {
    console.log(data);
    }); 
    //updates data every 1 second
    interval_switch = setInterval(() => { this.getData() }, 1000);
    console.log('server is running...');
}

//STOPS THE SERVER AND DATA STREAM AND REFRESHES THE PAGE 
  stopSimulation() {
    this.http.post(url + '/api/simulation/stop', {
    })
    .subscribe(data => {
    console.log(data);
    });
    clearInterval(interval_switch );
    console.log('server has stopped');
  }

  //SIMULATION IS PAUSED
  pauseSimulation(){this.http.post(url + '/api/simulation/pause', {
  })
  .subscribe(data => {
  console.log(data);
  });
}

//SIMULATION IS RESUMED
resumeSimulation(){this.http.post(url + '/api/simulation/unpause', {
})
.subscribe(data => {
console.log(data);
});
}

//DEPLOYS FAN ERROR
//SETS FAN ERROR VALUE TO TRUE, A FAN ERROR IS THEN DEPLOYED
//THE FAN SPEED BEGINS TO INCREASE. 
  deployError(){this.http.patch(url + '/api/simulation/deployerror?fan_error=true', {
  })
  .subscribe(data => {
  console.log(data);
  });
}

//RESOLVES FAN ERROR
//SETS FAN ERROR VALUE TO FALSE, FAN ERROR IS THEN RESOLVED
//THE FAN SPEED BEGINS TO DECREASE. 
resolveError(){this.http.patch(url + '/api/simulation/deployerror?fan_error=false', {
})
.subscribe(data => {
console.log(data);
});
}

//DEPLOYS FAN ERROR
setHandHold(val){this.http.patch(url + '/api/simulation/hand-hold?handhold=${val}`', {
})
.subscribe(data => {
  console.log(data);
});
}

//GETS DATA FOR STREAM FROM EMU.SERVICE.TS UNDER SERVICES 
//AN ARRAY OF UIA DATA IS CREATED, THIS DATA IS FED TO UIA FUNCTIONS 
getUiaData() {
  this.emu.getUia()
  .subscribe(data => {this.uias = data;
    this.uias = Array.of(this.uias);
    console.log(this.uias)
  });
}

//GETS DATA FOR STREAM FROM EMU.SERVICE.TS UNDER SERVICES
//AN ARRAY OF EMU DATA IS CREATED, THIS DATA IS FED TO EMU FUNCTIONS
  getData() {
    this.emu.getEMU()
    .subscribe(data => {this.telems = data;
      this.telems = Array.of(this.telems);
      console.log(this.telems)
    });
  }
}
