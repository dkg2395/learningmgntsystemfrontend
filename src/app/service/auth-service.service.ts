import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../Model/Message';

const AUTH_API = 'http://localhost:8070/api/v1.0/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  // login(email: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'login', {
  //     email,
  //     password
  //   }, httpOptions);
  // }

  login(email: string, password: string): Observable<any> {
    return this.http.get(`http://localhost:8070/api/v1.0/user/login/${email}/${password}`);
  }

  register(username: string, email: string, password: string): Observable<Message> {
    return this.http.post<Message>(AUTH_API + 'register', {
      username,
      email,
      password
    });
  }
}
