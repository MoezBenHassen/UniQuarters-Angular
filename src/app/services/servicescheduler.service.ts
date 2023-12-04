import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceschedulerService {

  constructor(private http: HttpClient) { }


  // crud schedule
/*
  private apiUrl = 'http://localhost:8080/api/schedule/loadData';
  private addapi="http://localhost:8080/api/schedule/addAudience"
  private apiUrl2 = 'http://localhost:8080/';*/
  apiUrl = environment.uniQuartersUri + '/schedule';
  addapi = environment.uniQuartersUri + '/schedule/addAudience';

  getAudienceList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  addAppointment(newAppointment: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/addTravaux', newAppointment);
  }
  deleteAudience(id: number): Observable<any> {
    const deleteUrl = `http://localhost:8080/api/schedule/deleteTravaux/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
  updateAudience(id: number, updatedAudience: any): Observable<any> {
    const updateUrl = `http://localhost:8080/api/schedule/updateTravaux/${id}`;
    return this.http.put<any>(updateUrl, updatedAudience);
  }
  getFilteredAppointmentsByLocation(location: string): Observable<any[]> {
    const apiUrl = `http://localhost:8080/api/schedule/TravauxByLocation/${location}`;
    return this.http.get<any[]>(apiUrl);
  }

}
