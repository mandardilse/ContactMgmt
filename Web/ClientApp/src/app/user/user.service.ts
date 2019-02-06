import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistration } from './models/user-registration';
import { UserLogin } from './models/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  registerUser(userInfo: UserRegistration) {
    console.log(userInfo)
    //return this.http.post(location.origin + '/api/account/register', userInfo);
  }
  loginUser(userInfo: UserLogin) {
    return this.http.post(location.origin + '/api/account/loginasync', userInfo, { responseType: 'text' });
  }
}
