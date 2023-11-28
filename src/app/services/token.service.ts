import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken() {
    return sessionStorage.getItem("access token");
  }
  setToken(token: string) {
    sessionStorage.setItem("access token", token);
  }
  removeToken() {
    sessionStorage.removeItem("access token");
  }
  
}
