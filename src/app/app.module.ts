import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Testability } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService} from './services/data.service';

import { AppComponent } from './app.component';
import { EMUService } from './services/emu.service';



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
  providers: [
    DataService,
    EMUService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



