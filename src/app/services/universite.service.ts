import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Universite } from '../models/universite';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  data: Universite[] = [];
  gouvernorats: string[] = [
    'Ariana',
    'Béja',
    'Ben Arous',
    'Bizerte',
    'Gabès',
    'Jendouba',
    'Le Kef',
    'Mahdia',
    'Médenine',
    'Monastir',
    'Nabeul',
    'Sfax',
    'Sousse',
    'Tunis',
  ];
  constructor(private _http: HttpClient) { }
  url = environment.uniQuartersUri + "/universites";
  getAllUniversites(): Observable<Universite[]> {
    return this._http.get<Universite[]>(this.url);
  }
  getGouvernorats(): string[] {
    return this.gouvernorats;
  }
  addUniversity(body: Universite) {
    console.log(body);
    return this._http.post(this.url, body);
  }
  
  updateUniversity(id: number, body: Universite) {
    return this._http.put(this.url + "/" + id, body);
  }
  deleteUniversity(id: number) {
    console.log(this.url + "/" + id);
    return this._http.delete(this.url + "/" + id);
  }
  fetchUniById(id: number) {
    return this._http.get<Universite>(this.url + "/" + id);
  }
  fetchUnisByAddress(add: String) {
    return this._http.get<Universite>(this.url + "/filtre/" + add);
  }
}
