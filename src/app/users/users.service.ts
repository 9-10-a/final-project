import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  register(user) {
    return this.http.post('http://localhost:3000/users/register', user);
  }

  login(user) {
    return this.http.post('http://localhost:3000/users/login', user);
  }

  constructor(private http: HttpClient) {}
}
