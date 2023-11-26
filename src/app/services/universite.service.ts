import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Universite } from '../models/universite';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  constructor(private _http: HttpClient) {}
  url="http://localhost:8080/universites";
  getAllUniversites():Observable<Universite[]>{
    return this._http.get<Universite[]>(this.url);
  }
}
