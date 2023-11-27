import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  apiUrl = environment.baseUrl + '/reservations';
  constructor(private _http: HttpClient) {}

  getReservations() {
    return this._http.get(this.apiUrl);
  }

  getReservation(id: number) {
    return this._http.get(`${this.apiUrl}/${id}`);
  }

  addReservation(idChambre: number, idClient: number) {
    return this._http.post(`${this.apiUrl}/${idChambre}/${idClient}`, {});
  }

  updateReservation(id: number) {
    return this._http.put(`${this.apiUrl}/${id}`, {});
  }

  cancelReservation(cinEtudiant: number) {
    return this._http.delete(`${this.apiUrl}/${cinEtudiant}`);
  }

  getEtudiants(){
    return this._http.get(environment.baseUrl + '/etudiants');
  }

  getChambres(){
    return this._http.get(environment.baseUrl + '/chambres');
  }
}
