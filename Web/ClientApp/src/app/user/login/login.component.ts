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
    this.store.pipe(select(getLoginState)).subscribe(x => console.log(x));
  }
  onLogin(form: NgForm) {
    let userInfo: UserLogin = {
      emailId: form.form.controls.emailId.value,
      password: form.form.controls.password.value
    }
    this.store.dispatch(new UserLoginAction(userInfo));
  }
}
