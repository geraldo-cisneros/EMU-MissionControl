import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DEFAULT_VALUE_ACCESSOR } from '@angular/forms/src/directives/default_value_accessor';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';

@Injectable()
export class EMUService {


    private url: string = 'http://localhost:3000';
    
    constructor(private http: HttpClient) { }


    getEMU() {
        return this
                .http
                .get('http://localhost:3000/api/simulation/state'); 
            }

    getUia() {
        return this
        .http
        .get('http://localhost:3000/api/simulation/uiastate'); 
    }
}