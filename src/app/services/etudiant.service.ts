import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../models/etudiant';
import { Observable, catchError, retry, throwError } from 'rxjs';

const uniQuartersUri = environment.uniQuartersUri + "/etudiants";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }

  addEtudiant(e: Etudiant): Observable<HttpResponse<any>> {
    return this.http.post(uniQuartersUri, e, { observe: 'response' }).pipe(retry(3), catchError(this.handleError));
  }

  updateEtudiant(e: Etudiant): Observable<HttpResponse<any>> {
    return this.http.put(uniQuartersUri, e, { observe: 'response' }).pipe(retry(3), catchError(this.handleError));
  }

  getEtudiants(): Observable<HttpResponse<any>> {
    return this.http.get(uniQuartersUri,{ observe: 'response' }).pipe(retry(3), catchError(this.handleError) )
  }

  getEtudiant(id:number): Observable<HttpResponse<any>> {
    return this.http.get(uniQuartersUri+"/"+id,{ observe: 'response' }).pipe(retry(3), catchError(this.handleError) )
  }

  deleteEtudiant(id:number): Observable<HttpResponse<any>> {
    return this.http.delete(uniQuartersUri+"/"+id,{ observe: 'response' }).pipe(retry(3), catchError(this.handleError) )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    errorMessage =
      error.error instanceof ErrorEvent
        ? `Error: ${error.error.message}`
        : `\nCode: ${error.status}\nMessage: ${error.message}`;
    return throwError(() => new Error(errorMessage));
  }
}
