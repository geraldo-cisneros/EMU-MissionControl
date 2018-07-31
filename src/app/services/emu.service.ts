import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMU } from '../emu';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class EMUService {

    private url: string = 'http://localhost:3000/api/suit';
    
    constructor(private http: HttpClient) { }


        getEMU(): Observable<EMU[]> {
            return this.http.get<EMU[]>(this.url);
        }
}
