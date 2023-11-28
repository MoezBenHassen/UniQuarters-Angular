import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../models/loginUser';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

const uniQuartersUri = environment.uniQuartersUri+"/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient, 
        private router: Router,
        private tokenService: TokenService
        ) {}

    login(u: LoginUser): Observable<any> {
        return this.http.post(uniQuartersUri + "/authenticate", u);
    }

    logout() {
        this.tokenService.removeToken();
        // sessionStorage.removeItem("permissions");
        // this.permissionService.flushPermissions();
        this.router.navigate(["/login"]);
    }

    
  

}
