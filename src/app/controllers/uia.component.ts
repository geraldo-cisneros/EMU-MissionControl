
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
	selector: 'uia-root',
	templateUrl: './uia.component.html',
    styleUrls: ['./uia.component.scss'],
    
})
export class UIAComponent {
    constructor(private router: Router, private http: HttpClient ){
    }

    public onClick(){
        this.router.navigate(['./uia']);
    }

    status: boolean = false;
    supplystatus: boolean = false; 
    wastestatus: boolean = false; 
    oxstatus: boolean = false; 
    ventstatus: boolean = false;

    emuOnOff() {
        this.status = !this.status;
        if (!this.status){
            {this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?emu_on_off=false', {
            })
            .subscribe(data => {
            console.log(data);
            });
            }
        }
        else{
            {this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?emu_on_off=true', {
            })
            .subscribe(data => {
            console.log(data);
            });
            }

        }
    }

    supplyWater() {
        this.supplystatus = !this.supplystatus;
        if (!this.supplystatus){
            {this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?supply=false', {
            })
            .subscribe(data => {
            console.log(data);
            });
            }
        }
        else{
            {this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?supply=true', {
            })
            .subscribe(data => {
            console.log(data);
            });
            }

        }
    }

    wasteWater() {
        this.wastestatus = !this.wastestatus;
        if (!this.wastestatus){
            {this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?waste=false', {
            })
            .subscribe(data => {
            console.log(data);
            });
            }
        }
        else{
            {this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?waste=true', {
            })
            .subscribe(data => {
            console.log(data);
            });
            }

        }
    }

    oxygen() {
        this.oxstatus = !this.oxstatus;
        if (!this.oxstatus){
            {this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?oxygen=false', {
            })
            .subscribe(data => {
            console.log(data);
            });
            }
        }
        else{
            {this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?oxygen=true', {
            })
            .subscribe(data => {
            console.log(data);
            });
            }

        }
    }

    o2Vent() {
        this.ventstatus = !this.ventstatus;
        if (!this.ventstatus){
            {this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?o2_vent=false', {
            })
            .subscribe(data => {
            console.log(data);
            });
            }
        }
        else{
            {this.http.patch('http://localhost:3000/api/simulation/newuiacontrols?o2_vent=true', {
            })
            .subscribe(data => {
            console.log(data);
            });
            }

        }
    }
}