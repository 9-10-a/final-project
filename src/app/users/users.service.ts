import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/users/';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  register(user) {
    return this.http.post(BACKEND_URL + 'register', user);
  }

  login(user) {
    return this.http.post(BACKEND_URL + 'login', user);
  }

  constructor(private http: HttpClient) {}
}
