import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  uniQuartersUri = environment.uniQuartersUri + '/reservations';
  constructor(private _http: HttpClient) {}

  getReservations() {
    return this._http.get(this.uniQuartersUri);
  }

  getReservation(id: String) {
    return this._http.get(`${this.uniQuartersUri}/${id}`);
  }

  addReservation(idChambre: number, cinEtudiant: number) {
    return this._http.post(`${this.uniQuartersUri}/${idChambre}/${cinEtudiant}`, {});
  }

  updateReservation(id: String) {
    return this._http.put(`${this.uniQuartersUri}/${id}`, {});
  }

  cancelReservation(cinEtudiant: number) {
    return this._http.delete(`${this.uniQuartersUri}/${cinEtudiant}`);
  }

  getEtudiants() {
    return this._http.get(environment.uniQuartersUri + '/etudiants');
  }

  getChambres() {
    return this._http.get(environment.uniQuartersUri + '/chambres');
  }
}
