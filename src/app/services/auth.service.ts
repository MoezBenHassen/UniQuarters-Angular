import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../models/loginUser';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../models/etudiant';
import { Role } from '../models/role';

const uniQuartersUri = environment.uniQuartersUri+"/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient, 
        private router: Router,
        private tokenService: TokenService,
        ) {}

    roleAs?:Role;

    getRole() {
        return sessionStorage.getItem("ROLE");
    }
    setRole(role:Role){
        sessionStorage.setItem("ROLE",role);
    }

    getLoggedInUser():Observable<any>{
        return this.http.get(uniQuartersUri+"/userByToken/"+this.tokenService.getAccessToken);
    }

    getLoggedInEtudiant():Observable<any>{
        return this.http.get(uniQuartersUri+"/etudiantByToken/"+this.tokenService.getAccessToken);
    }

    login(u: LoginUser): Observable<any> {
        return this.http.post(uniQuartersUri + "/authenticate", u);
    }

    logout() {
        this.tokenService.removeToken();
        return this.http.get(uniQuartersUri + "/logout");
    }

    refreshToken(refreshToken:string):Observable<any>{
        return this.http.post(uniQuartersUri+"/refresh-token",refreshToken);
    }
  
    register(e:Etudiant): Observable<any> {
        return this.http.post(uniQuartersUri+"/register",e, { observe: 'response' }).pipe(retry(3), catchError(this.handleError));
    }

    emailExists(email:string){
        return this.http.get(uniQuartersUri+"/emailAlreadyExists/"+email,{responseType:'text'}).pipe(retry(3), catchError(this.handleError));
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
