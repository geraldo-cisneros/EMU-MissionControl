import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Testability } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Observable, interval, pipe } from 'rxjs';
import {switchMap, map} from 'rxjs/operators';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService} from './services/data.service';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }



