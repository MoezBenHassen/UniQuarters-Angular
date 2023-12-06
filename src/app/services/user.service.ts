import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable, catchError, retry, throwError } from 'rxjs';

const uniQuartersUri = environment.uniQuartersUri+"/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(e: User): Observable<HttpResponse<any>> {
    return this.http.post(uniQuartersUri, e, { observe: 'response' }).pipe(retry(3), catchError(this.handleError));
  }

  updateUser(e: User): Observable<HttpResponse<any>> {
    return this.http.put(uniQuartersUri, e, { observe: 'response' }).pipe(retry(3), catchError(this.handleError));
  }

  getUsers(): Observable<HttpResponse<any>> {
    return this.http.get(uniQuartersUri,{ observe: 'response' }).pipe(retry(3), catchError(this.handleError) )
  }

  getUser(id:number): Observable<HttpResponse<any>> {
    return this.http.get(uniQuartersUri+"/"+id,{ observe: 'response' }).pipe(retry(3), catchError(this.handleError) )
  }

  deleteUser(id:number): Observable<HttpResponse<any>> {
    return this.http.get(uniQuartersUri+"/"+id,{ observe: 'response' }).pipe(retry(3), catchError(this.handleError) )
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
