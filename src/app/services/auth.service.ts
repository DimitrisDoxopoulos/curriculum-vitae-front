import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/login/`;
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private http:HttpClient, private router: Router) {
    const token = localStorage.getItem(environment.authTokenKey);
    this.tokenSubject.next(token);
  }

  get token(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  setToken(token: string): void {
    localStorage.setItem(environment.authTokenKey, token);
    this.tokenSubject.next(token);
  }

  logout(): void {
    localStorage.removeItem(environment.authTokenKey);
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }
}
