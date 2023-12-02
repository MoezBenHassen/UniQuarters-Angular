import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  apiUrl = environment.baseUrl + '/reservations';
  constructor(private _http: HttpClient) {}

  data: Reservation[] = [];

  getReservations() {
    return this._http.get(this.apiUrl);
  }

  getReservation(id: String) {
    return this._http.get(`${this.apiUrl}/${id}`);
  }

  addReservation(idChambre: number, cinEtudiant: number) {
    return this._http.post(`${this.apiUrl}/${idChambre}/${cinEtudiant}`, {});
  }

  updateReservation(id: String) {
    return this._http.put(`${this.apiUrl}/${id}`, {});
  }

  validateReservation(id: String) {
    return this._http.put(`${this.apiUrl}/valider/${id}`, {});
  }

  cancelReservation(cinEtudiant: number) {
    return this._http.delete(`${this.apiUrl}/${cinEtudiant}`);
  }

  getEtudiants() {
    return this._http.get(environment.baseUrl + '/etudiants');
  }

  getChambres() {
    return this._http.get(environment.baseUrl + '/chambres');
  }
}
