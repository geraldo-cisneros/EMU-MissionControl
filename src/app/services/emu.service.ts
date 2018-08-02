import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { xemu } from '../emu';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class EMUService {


    private url: string = 'http://localhost:3000';
    
    constructor(private http: HttpClient) { }


    getEMU() {
        return this
                .http
                .get('http://localhost:3000/api/suit/recent'); 
            }
        }
          