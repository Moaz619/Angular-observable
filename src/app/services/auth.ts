import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../models/ilogin';
import { Observable, tap } from 'rxjs';
import { API_URLS } from '../constants/api_urls';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  tokenKey: string = 'token';
  constructor(private httpClient: HttpClient) {}

  authLogin(loginDetails: ILogin): Observable<any> {
    console.log(loginDetails);
    return this.httpClient.post<any>(API_URLS.login, loginDetails).pipe(
      tap((res: any) => {
        localStorage.setItem(this.tokenKey, res.accessToken);
      })
    );
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
