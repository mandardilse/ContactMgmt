import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistration } from './models/user-registration';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  registerUser(userInfo: UserRegistration) {
    return this.http.post(location.origin + '/api/account/register', userInfo);
  }
}
