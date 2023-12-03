import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ServiceschedulerService {

  constructor(private http: HttpClient) { }


  // crud schedule

  private apiUrl = 'http://localhost:8082/api/schedule/loadData';
  private addapi="http://localhost:8082/api/schedule/addAudience"
  private apiUrl2 = 'http://localhost:8082/';
  getAudienceList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  addAppointment(newAppointment: any): Observable<any> {
    return this.http.post<any>(this.addapi, newAppointment);
  }
  deleteAudience(id: number): Observable<any> {
    const deleteUrl = `http://localhost:8082/api/schedule/deleteAudience/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
  updateAudience(id: number, updatedAudience: any): Observable<any> {
    const updateUrl = `http://localhost:8082/api/schedule/updateAudience/${id}`;
    return this.http.put<any>(updateUrl, updatedAudience);
  }
  getFilteredAppointmentsByLocation(location: string): Observable<any[]> {
    const apiUrl = `http://localhost:8082/api/schedule/AudienceByLocation/${location}`;
    return this.http.get<any[]>(apiUrl);
  }

}
