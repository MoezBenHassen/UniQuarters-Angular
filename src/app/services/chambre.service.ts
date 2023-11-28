import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Chambre } from '../models/chambre';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ChambreService {
    constructor(private fb: FormBuilder, public httpClient: HttpClient) { }
    AddOrEditChambreForm = this.fb.group({
        id: [0],
        name: ['', Validators.required],
        otherProperty: ['']
    })

    getAllChambre(): Observable<HttpResponse<Chambre>> {
        return this.httpClient.get<Chambre>(`${environment?.uniQuartersUri}/Chambres`,
            { observe: 'response' }).pipe(retry(3), catchError(this.handleError));
    }

    AddChambre(Chambre: Chambre): Observable<HttpResponse<Chambre>> {
        return this.httpClient
            .post<Chambre>(
                `${environment?.uniQuartersUri}/Chambres`, Chambre, { observe: 'response' }
            ).pipe(retry(3), catchError(this.handleError));
    }


    UpdateChambre(id: number, chambre: Chambre): Observable<HttpResponse<Chambre>> {
        return this.httpClient
            .put<Chambre>(
                `${environment?.uniQuartersUri}/Chambres/` + id, chambre, { observe: 'response' }).pipe(retry(3), catchError(this.handleError));
    }

    DeleteChambre(id: number): Observable<HttpResponse<Chambre>> {
        return this.httpClient
            .delete<Chambre>(
                `${environment?.uniQuartersUri}/Chambres/` + id, { observe: 'response' }).pipe(retry(3), catchError(this.handleError));
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        errorMessage =
            error.error instanceof ErrorEvent
                ? `Error: ${error.error.message}`
                : `\nCode: ${error.status}\nMessage: ${error.message}`;
        return throwError(errorMessage);
    }
}
