import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../models/loginUser';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../models/etudiant';

const uniQuartersUri = environment.uniQuartersUri+"/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient, 
        private router: Router,
        private tokenService: TokenService,
        // private permissionService: NgxPermissionsService
        ) {}

    login(u: LoginUser): Observable<any> {
        return this.http.post(uniQuartersUri + "/authenticate", u);
    }

    logout() {
        this.tokenService.removeToken();
        // sessionStorage.removeItem("permissions");
        // this.permissionService.flushPermissions();
        return this.http.get(uniQuartersUri + "/logout");
    }

    refreshToken(){
        return this.http.post(uniQuartersUri+"/refresh-token",null);
    }
  
    register(e:Etudiant): Observable<any> {
        return this.http.post(uniQuartersUri+"/register",e, { observe: 'response' }).pipe(retry(3), catchError(this.handleError));
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
