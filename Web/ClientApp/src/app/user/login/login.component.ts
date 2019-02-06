import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { UserLogin } from '../models/user-login';
import { UserState, getLoginState, UserLoginAction } from '../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<UserState>) { }

  ngOnInit() {
    //this.store.pipe(select(getLoginState)).subscribe(x => console.log(x));
  }
  onLogin(loginForm: NgForm) {
    let userInfo: UserLogin = {
      emailId: loginForm.form.controls.emailId.value,
      password: loginForm.form.controls.password.value
    }
    let userAction = new UserLoginAction(userInfo);
    this.store.dispatch(userAction);
  }
}
